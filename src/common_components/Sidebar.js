import React from 'react';
import './css/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="/feed">Feed</a></li>
          <li><a href="/bookmarks">Bookmarks</a></li>
          <li><a href="/following">Following</a></li>
          <li><a href="/your-content">Your content</a></li>
        </ul>
      </nav>
      <div className="topics">
        <h3>Topics</h3>
        <ul>
          <li><a href="/topic/technology">Technology</a></li>
          <li><a href="/topic/science">Science</a></li>
          <li><a href="/topic/health">Health</a></li>
          <li><a href="/topic/business">Business</a></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;