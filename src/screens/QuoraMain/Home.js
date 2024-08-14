import React from 'react';
import Header from '../../common_components/Header';
import Sidebar from '../../common_components/Sidebar';
import Feed from './Feed';
import PostSection from './PostSection';
import '../css/Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <PostSection />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default Home;
