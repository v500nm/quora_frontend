import React, { useState, useEffect } from "react";
import "../css/Feed.css";
import { connect } from "react-redux";
import {
  viewQuestionsWithAnswersAndComments_action,
  add_answer_action,
} from "../../actions/QnAAction/QnA_action";
import {
  add_comment_action,
  add_vote_action,
} from "../../actions/CommentVoteAction/comment_vote_action";
import JoditEditor from "jodit-react";

function Feed({
  viewQuestionsWithAnswersAndComments_action,
  add_answer_action,
  add_comment_action,
  add_vote_action,
  searchTerm,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeedItem, setSelectedFeedItem] = useState(null);
  const [feedItems, setFeedItems] = useState([]);
  const [viewAnswersFor, setViewAnswersFor] = useState(null);

  useEffect(() => {
    const fetchFeedData = async () => {
      try {
        const res = await viewQuestionsWithAnswersAndComments_action(
          searchTerm
        );
        setFeedItems(res.data);
      } catch (err) {
        console.error("Error fetching feed data:", err);
      }
    };

    fetchFeedData();
  }, [viewQuestionsWithAnswersAndComments_action, searchTerm]);

  const openModal = (item) => {
    setSelectedFeedItem(item);
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeedItem(null);
    document.body.classList.remove("modal-open");
  };

  const handleAnswerSubmit = async (content) => {
    try {
      await add_answer_action(selectedFeedItem.QuestionID, content);
      closeModal();
    } catch (err) {
      console.error("Error submitting answer:", err);
    }
  };

  const handleCommentSubmit = async (answerID, comment) => {
    try {
      await add_comment_action(answerID, comment);
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
  };

  const handleVote = async (answerID, isUpvote) => {
    try {
      await add_vote_action(answerID, isUpvote);
    } catch (err) {
      console.error("Error submitting vote:", err);
    }
  };

  const toggleViewAnswers = (item) => {
    setViewAnswersFor(
      viewAnswersFor === item.QuestionID ? null : item.QuestionID
    );
  };

  return (
    <div className="feed">
      {feedItems.map((item) => (
        <div key={item.QuestionID} className="feed-item">
          <div className="feed-item-header">
            <div className="user-info question-user-info">
              <div className="user-avatar">
                <span className="user-initial">
                  {item.QuestionAuthor.split(" ")
                    .map((part) => part.charAt(0))
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
              <div className="user-details">
                <span className="user-name">{item.QuestionAuthor}</span>
                <span className="post-date">
                  {formatDate(item.QuestionCreatedDate)}
                </span>
              </div>
            </div>
          </div>
          <h2 className="feed-title">{item.Title}</h2>
          <FeedContent content={item.QuestionContent} />
          <hr />
          <div className="feed-item-actions">
            <button className="feed-action share-action" title="Share">
              <i className="fa fa-share"></i> Share
            </button>
            <button
              className="feed-action view-answers-action"
              title="View Answers"
              onClick={() => toggleViewAnswers(item)}
            >
              <i className="fa fa-eye"></i> View Answers
            </button>
            <button
              className="feed-action answer-action"
              title="Answer"
              onClick={() => openModal(item)}
            >
              <i className="fa fa-reply"></i> Answer
            </button>
          </div>

          {viewAnswersFor === item.QuestionID && (
            <div className="answers-section">
              {item.answers && item.answers.length > 0 ? (
                item.answers.map((answer) => (
                  <AnswerSection
                    key={answer.AnswerID}
                    answer={answer}
                    onCommentSubmit={handleCommentSubmit}
                    onVote={handleVote}
                  />
                ))
              ) : (
                <p>No Answers available</p>
              )}
            </div>
          )}
        </div>
      ))}

      {isModalOpen && (
        <AnswerModal
          feedItem={selectedFeedItem}
          onClose={closeModal}
          onSubmit={handleAnswerSubmit}
        />
      )}
    </div>
  );
}

function AnswerSection({ answer, onCommentSubmit, onVote }) {
  const [comment, setComment] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 400;

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmit = () => {
    if (comment) {
      onCommentSubmit(answer.AnswerID, comment);
      setComment("");
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="answer-section">
      <div className="answer-header">
        <div className="user-info answer-user-info">
          <div className="user-avatar">
            <span className="user-initial">
              {answer.AnswerAuthor.split(" ")
                .map((part) => part.charAt(0))
                .join("")
                .toUpperCase()}
            </span>
          </div>
          <div className="user-details">
            <span className="user-name">{answer.AnswerAuthor}</span>
            <span className="post-date">
              {formatDate(answer.AnswerCreatedDate)}
            </span>
          </div>
        </div>
      </div>
      <div className="answer-content">
        {isExpanded ? (
          <div dangerouslySetInnerHTML={{ __html: answer.AnswerContent }} />
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html:
                answer.AnswerContent.substring(0, limit) +
                (answer.AnswerContent.length > limit ? "..." : ""),
            }}
          />
        )}
        {answer.AnswerContent.length > limit && (
          <button className="read-more" onClick={toggleExpand}>
            {isExpanded ? "View less" : "See more"}
          </button>
        )}
      </div>
      <div className="answer-actions">
        <button
          className="feed-action upvote-action"
          title="Upvote"
          onClick={() => onVote(answer.AnswerID, true)}
        >
          <i className="fa fa-thumbs-up"></i>
        </button>
        <button
          className="feed-action downvote-action"
          title="Downvote"
          onClick={() => onVote(answer.AnswerID, false)}
        >
          <i className="fa fa-thumbs-down"></i>
        </button>
      </div>
      <div className="comment-input">
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
        />
        <i
          className="fa fa-paper-plane"
          onClick={handleSubmit}
        ></i>
      </div>
      <div className="previous-comments">
        {answer.comments && answer.comments.length > 0 ? (
          answer.comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="user-info comment-user-info">
                <div className="user-avatar">
                  <span className="user-initial">
                    {comment.CommentAuthor.split(" ")
                      .map((part) => part.charAt(0))
                      .join("")
                      .toUpperCase()}
                  </span>
                </div>
                <div className="user-details">
                  <span className="user-name">{comment.CommentAuthor}</span>
                  <span className="post-date">
                    {formatDate(comment.CommentCreatedDate)}
                  </span>
                </div>
              </div>
              <p>{comment.CommentContent}</p>
            </div>
          ))
        ) : (
          <p>No Comments!</p>
        )}
      </div>
    </div>
  );
}

function AnswerModal({ feedItem, onClose, onSubmit }) {
  const [content, setContent] = useState(feedItem?.initialContent || "");

  useEffect(() => {
    setContent(feedItem?.initialContent || "");
  }, [feedItem]);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleSubmit = () => {
    if (content) {
      onSubmit(content);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">Answer Question</h2>
        <div className="modal-body">
          <JoditEditor
            value={content}
            onChange={handleContentChange}
            config={{
              height: 200,
              placeholder: "Type your answer here...",
            }}
          />
        </div>
        <div className="modal-actions">
          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function FeedContent({ content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 200;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="feed-content">
      {isExpanded ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html:
              content.substring(0, limit) +
              (content.length > limit ? "..." : ""),
          }}
        />
      )}
      {content.length > limit && (
        <button className="read-more" onClick={toggleExpand}>
          {isExpanded ? "View less" : "See more"}
        </button>
      )}
    </div>
  );
}

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric", hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default connect(null, {
  viewQuestionsWithAnswersAndComments_action,
  add_answer_action,
  add_comment_action,
  add_vote_action,
})(Feed);
