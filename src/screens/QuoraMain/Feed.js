import React, { useState } from 'react';
import JoditEditor from 'jodit-react';
import '../css/Feed.css';

function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeedItem, setSelectedFeedItem] = useState(null);
  const [comments, setComments] = useState({});

  const feedItems = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        profilePic: 'https://via.placeholder.com/50',
      },
      title: 'Sample Question 1',
      content: 'This is the content of question 1. It is a bit longer to demonstrate the Read more functionality in action.',
    },
    {
      id: 2,
      user: {
        name: 'Jane Smith',
        profilePic: 'https://via.placeholder.com/50',
      },
      title: 'Sample Question 2',
      content: 'This is the content of question 2. This text is also quite lengthy, showcasing how you might want to limit the displayed text and allow the user to read more.',
    },
  ];

  const openModal = (item) => {
    setSelectedFeedItem(item);
    setIsModalOpen(true);
    document.body.classList.add('modal-open'); // Add class to body
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeedItem(null);
    document.body.classList.remove('modal-open'); // Remove class from body
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
        <div key={item.id} className="feed-item">
          <div className="feed-item-header">
            <img src={item.user.profilePic} alt={`${item.user.name}`} className="profile-pic" />
            <span className="user-name">{item.user.name}</span>
          </div>
          <h2 className="feed-title">{item.title}</h2>
          <FeedContent content={item.content} />
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
              <button className="feed-action" title="Comment" onClick={() => toggleComments(item.id)}>
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
          {comments[item.id] && (
            <CommentSection
              comments={comments[item.id]}
              onSubmit={(comment) => handleCommentSubmit(item.id, comment)}
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
  const limit = 100;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="feed-content">
      {isExpanded ? content : content.substring(0, limit) + (content.length > limit ? '...' : '')}
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
        <h2>Answer: {feedItem.title}</h2>
        <JoditEditor
          value={content}
          onChange={setContent}
          config={{
            toolbar: true, // Enable the toolbar
            height: 300,   // Adjust height as needed
          }}
        />
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
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

export default Feed;
