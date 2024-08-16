import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

function Header({ setSearchTerm }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsUserMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsUserMenuOpen(false);
    }, 1000);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update searchTerm in Home
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        Quora
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/answer">Answer</Link>
          </li>
          <li>
            <Link to="/spaces">Spaces</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Quora"
          onChange={handleSearchChange} // Trigger search change
        />
        <span className="search-icon">🔍</span>
      </div>
      <div
        className="user-menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="user-avatar">
          <span className="user-initial">
            {sessionStorage
              .getItem("UserName")
              .split(" ")
              .map((part) => part.charAt(0))
              .join("")
              .toUpperCase()}
          </span>
        </div>
        <span className="user-name">{sessionStorage.getItem("UserName")}</span>
        {isUserMenuOpen && (
          <div className="user-dropdown">
            <Link to="/logout" className="logout-link">
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
