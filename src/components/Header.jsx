import React from 'react';
import './Header.css';
import logo from "../assets/logo.png"

function Header() {
  return (
    <header className="header-container">
      <nav className="nav">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" style={{height:"50px"}} />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="/">HOME</a></li>
          <li><a href="/">ABOUT</a></li>
          <li><a href="/">FOOD</a></li>
          <li><a href="/">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;