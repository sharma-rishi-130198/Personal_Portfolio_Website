import React from 'react';
import '../App.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact-info">Contact Details</a></li>
        <li><a href="#contact-me">Drop a message</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


