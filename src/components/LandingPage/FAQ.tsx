import React from 'react';

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2>About & FAQ</h2>
        <div className="faq-item">
          <h4>What is Cirrus?</h4>
          <p>Cirrus is an in-development, general-purpose programming language. Our goal is to create a language that is both easy to learn for beginners and powerful enough for complex systems. By compiling to C, we leverage decades of compiler optimization and ensure broad hardware and operating system support from day one.</p>
        </div>
        <div className="faq-item">
          <h4>Why the name "Cirrus"?</h4>
          <p>Cirrus clouds are thin, wispy, and found at high altitudes. This name reflects our design philosophy for the language: it's <strong>lightweight</strong> ('thin'), has a clear and unobtrusive <strong>syntax</strong> ('wispy'), and provides a <strong>high level of abstraction</strong> while still being close to the metal ('high altitude').</p>
        </div>
        <div className="faq-item">
          <h4>When is the first official release?</h4>
          <p>The language is in its infancy and is being developed by a small team of enthusiasts. There is no set release date for an official version. You can follow our progress and see the latest updates on our Discord server.</p>
        </div>
        <div className="faq-item">
          <h4>How can I contribute?</h4>
          <p>We welcome all contributors! The best place to start is our Discord community. We will be setting up a public code repository soon where you can report issues, suggest features, and contribute code.</p>
        </div>
      </div>
    </section>
  );
};