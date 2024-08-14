import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import '../css/PostSection.css';

function PostSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [modalType, setModalType] = useState(''); // New state to track the type of modal
  const editor = useRef(null);

  const config = {
    readonly: false,
    height: 300,
    placeholder: 'Add more details to your question (optional)',
  };

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setQuestion('');
    if (editor.current) {
      editor.current.value = '';
    }
  };

  const handleSubmit = () => {
    const details = editor.current ? editor.current.value : '';
    if (modalType === 'Ask') {
      console.log('Posted question:', question);
    } else if (modalType === 'Post') {
      console.log('Created post:', question);
    }
    console.log('Additional details:', details);
    // Here you would typically send the content to your backend
    handleCloseModal();
  };

  return (
    <div className="post-section">
      <div className="postSectionOpen">
        <div className="profileInput">
          <div className="profileSpan">
            <img src='' alt='Profile'/>
          </div>
          <div className="profileInputModal">
            <input 
              type='text' 
              placeholder='What do you want to ask or share?' 
              onClick={() => handleOpenModal('Ask')} // Default to "Ask" when input is clicked
              readOnly
            />
          </div>
        </div>
        <div className="PostOptions">
          <div onClick={() => handleOpenModal('Ask')}>
            <i className='fa fa-question'></i>Ask
          </div> 
          <div onClick={() => handleOpenModal('Post')}>
            <i className='fa fa-edit'></i>Post
          </div> 
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modalType === 'Ask' ? 'Ask a Question' : 'Create a Post'}</h2>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={modalType === 'Ask' ? "Start your question with 'Why', 'What', 'How', etc." : "Write something..."}
              className="question-input"
            />
            <JoditEditor
              ref={editor}
              config={config}
              tabIndex={1}
            />
            <div className="modal-actions">
              <button onClick={handleSubmit}>{modalType === 'Ask' ? 'Post Question' : 'Create Post'}</button>
              <button onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostSection;
