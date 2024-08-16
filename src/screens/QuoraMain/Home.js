import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../common_components/Header';
import Sidebar from '../../common_components/Sidebar';
import Feed from './Feed';
import PostSection from './PostSection';
import '../css/Home.css';
import { toastError } from '../../utils/constants';

function Home() {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search input
  const navigate = useNavigate();

  useEffect(() => {
    const userID = sessionStorage.getItem('UserID');
    if (!userID) {
      navigate('/');
      toastError('Unauthorized user');
    }
  }, [navigate]);

  return (
    <div className="home">
      <Header setSearchTerm={setSearchTerm} /> {/* Pass setSearchTerm to Header */}
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <PostSection />
          <Feed searchTerm={searchTerm} /> {/* Pass searchTerm to Feed */}
        </div>
      </div>
    </div>
  );
}

export default Home;
