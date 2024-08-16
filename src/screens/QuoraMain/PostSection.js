import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import JoditEditor from 'jodit-react';
import '../css/PostSection.css';
import { add_question_action } from '../../actions/QnAAction/QnA_action';
import { toastError, toastSuccess } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

function PostSection({ add_question_action }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [modalType, setModalType] = useState(""); // New state to track the type of modal
  const editor = useRef(null);

  
  const config = {
    readonly: false,
    height: 300,
    placeholder: 'Add more details to your question (optional)',
    toolbar: true,
    spellcheck: true,
    language: "en",
    toolbarButtonSize: "medium",
    toolbarAdaptive: false,
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    uploader: {
      insertImageAsBase64URI: true,
    },    
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("UserName")) {
      navigate('/');
    }
  }, [navigate]);
  

  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setQuestion("");
    if (editor.current) {
      editor.current.value = "";
    }
  };

  const handleSubmit = async () => {
    const details = editor.current ? editor.current.value : "";
    try {
      if (modalType === 'Ask') {
        await add_question_action(question, details);
      } else if (modalType === 'Post') {
        await add_question_action(question, details);
      }
      toastSuccess(`${modalType=="Ask"?"Question Submitted Successfully":"Post Submitted Successfully"}`)
      handleCloseModal();
    } catch (error) {
      console.error("Failed to submit:", error);
      toastError(error)
    }
  };

  return (
    <div className="post-section">
      <div className="postSectionOpen">
        <div className="profileInput">
          <div className="profileSpan">
            <div className="user-avatar">
              <span className="user-initial">
                {sessionStorage
                  .getItem("UserName")
                  .split(" ")
                  .map(part => part.charAt(0))
                  .join("")
                  .toUpperCase()}
              </span>
            </div>
          </div>
          <div className="profileInputModal">
            <input
              type="text"
              placeholder="What do you want to ask or share?"
              onClick={() => handleOpenModal("Ask")}
              readOnly
            />
          </div>
        </div>
        <div className="PostOptions">
          <div onClick={() => handleOpenModal("Ask")}>
            <i className="fa fa-question"></i>Ask
          </div>
          <div onClick={() => handleOpenModal("Post")}>
            <i className="fa fa-edit"></i>Post
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modalType === "Ask" ? "Ask a Question" : "Create a Post"}</h2>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={
                modalType === "Ask"
                  ? "Start your question with 'Why', 'What', 'How', etc."
                  : "Write something..."
              }
              className="question-input"
            />
            <JoditEditor ref={editor} config={config} tabIndex={1} />
            <div className="modal-actions">
              <button onClick={handleSubmit}>
                {modalType === "Ask" ? "Post Question" : "Create Post"}
              </button>
              <button onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default connect(null, { add_question_action })(PostSection);
