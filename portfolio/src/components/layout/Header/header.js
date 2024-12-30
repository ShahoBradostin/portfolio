import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="homepage.js">Home</a>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#">About Me (cv)</a></li>
            <li><a href="#">My projects</a></li>
            <li><a href="#">Kunskaper</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
