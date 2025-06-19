import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="logo">Cirrus</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#getting-started">Get Started</a></li>
          <li><a href="#faq">About & FAQ</a></li>
          <li><a href="https://discord.gg/hPB7eFsRmY" target="_blank" rel="noopener noreferrer">Community</a></li>
        </ul>
      </nav>
    </header>
  );
};