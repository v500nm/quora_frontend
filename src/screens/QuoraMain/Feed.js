import React, { useState, useEffect } from 'react';
import '../css/Feed.css';
import { connect } from "react-redux";
import { view_all_questions_action } from '../../actions/QnAAction/QnA_action';
import JoditEditor from 'jodit-react';

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

function Feed({ view_all_questions_action, searchTerm }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeedItem, setSelectedFeedItem] = useState(null);
  const [comments, setComments] = useState({});
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchFeedData = async () => {
      try {
        const res = await view_all_questions_action(searchTerm); // Filter feed based on searchTerm
        setFeedItems(res.data);
      } catch (err) {
        console.error("Error fetching feed data:", err);
      }
    };

    fetchFeedData();
  }, [view_all_questions_action, searchTerm]); // Re-fetch when searchTerm changes

  const openModal = (item) => {
    setSelectedFeedItem(item);
    setIsModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeedItem(null);
    document.body.classList.remove('modal-open');
  };

  const handleAnswerSubmit = (content) => {
    console.log('Answer submitted:', content);
    closeModal();
  };

  const toggleComments = (id) => {
    setComments((prev) => ({
      ...prev,
      [id]: prev[id] ? null : [],
    }));
  };

  const handleCommentSubmit = (id, comment) => {
    if (comment.trim()) {
      setComments((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), comment],
      }));
    }
  };

  return (
    <div className="feed">
      {feedItems.map((item) => (
        <div key={item.QuestionID} className="feed-item">
          <div className="feed-item-header">
            <div className="user-info">
              <div className="user-avatar">
                <span className="user-initial">
                  {item.Username
                    .split(" ")
                    .map((part) => part.charAt(0))
                    .join("")
                    .toUpperCase()}
                </span>
              </div>
              <span className="user-name">{item.Username}</span>
            </div>
            <span className="post-date">{formatDate(item.CreatedDate)}</span>
          </div>
          <h2 className="feed-title">{item.Title}</h2>
          <FeedContent content={item.Content} />
          <div className="feed-actions">
            <div className="vote-chip">
              <button className="feed-action" title="Upvote">
                <i className="fa fa-thumbs-up"></i>
              </button>
              <button className="feed-action" title="Downvote">
                <i className="fa fa-thumbs-down"></i>
              </button>
            </div>
            <div className="other-actions">
              <button className="feed-action" title="Comment" onClick={() => toggleComments(item.QuestionID)}>
                <i className="fa fa-comment"></i>
              </button>
              <button className="feed-action" title="Share">
                <i className="fa fa-share"></i>
              </button>
            </div>
            <button className="feed-action answer-action" title="Answer" onClick={() => openModal(item)}>
              <i className="fa fa-reply"></i> Answer
            </button>
          </div>
          {comments[item.QuestionID] && (
            <CommentSection
              comments={comments[item.QuestionID]}
              onSubmit={(comment) => handleCommentSubmit(item.QuestionID, comment)}
            />
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
        <div dangerouslySetInnerHTML={{ __html: content.substring(0, limit) + (content.length > limit ? '...' : '') }} />
      )}
      {content.length > limit && (
        <button className="read-more" onClick={toggleExpand}>
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
}

function AnswerModal({ feedItem, onClose, onSubmit }) {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmit(content);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Answer: {feedItem.Title}</h2>
        <JoditEditor
          value={content}
          onChange={setContent}
          config={{
            toolbar: true,
            height: 300,
          }}
        />
        <div className="modal-actions">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function CommentSection({ comments, onSubmit }) {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    onSubmit(comment);
    setComment('');
  };

  return (
    <div className="comment-section">
      <div className="comment-input">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button className="submit-comment" onClick={handleSubmit}>
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
      <div className="previous-comments">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(null, { view_all_questions_action })(Feed);
