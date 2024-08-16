import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './css/Sidebar.css';
import { connect } from 'react-redux';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to="/bookmarks">Bookmarks</Link></li>
          <li><Link to="/following">Following</Link></li>
          <li><Link to="/your-content">Your content</Link></li>
        </ul>
      </nav>
      <div className="topics">
        <h3>Topics</h3>
        <ul>
          <li><Link to="/topic/technology">Technology</Link></li>
          <li><Link to="/topic/science">Science</Link></li>
          <li><Link to="/topic/health">Health</Link></li>
          <li><Link to="/topic/business">Business</Link></li>
        </ul>
      </div>
    </aside>
  );
}

export default connect(null, {  })(Sidebar);
