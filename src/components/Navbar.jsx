import React from "react";

export default function Navbar() {
  return (
    <div className="bg-opacity-75">
      <div class="navbar">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
