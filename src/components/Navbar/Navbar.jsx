import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          thecollegereviews
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
      <div className="navbar-right">
        <div className={`navbar-search ${showSearchBar ? 'show-search' : ''}`}>
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <button className="search-btn" onClick={toggleSearchBar}>
          <CiSearch />
        </button>
        <div className="navbar-auth">
          <Link to="/account" className="auth-link">
            <FaUserCircle />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;