import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Fast, expressive, and feather-light.</h1>
        <p className="subtitle">
          Cirrus is a modern, open-source, general-purpose programming language. It combines the performance of C with a clean, high-level syntax, making software development efficient and enjoyable.
        </p>
        <div className="hero-buttons">
          <a href="#getting-started" className="btn btn-primary">Get Started</a>
          <a href="https://discord.gg/hPB7eFsRmY" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Join the Community</a>
        </div>
      </div>
    </section>
  );
};