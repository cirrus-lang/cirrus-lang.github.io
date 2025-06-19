import React from 'react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>Why Cirrus?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Modern Syntax, C-like Power</h3>
            <p>Enjoy an intuitive and clean syntax that feels familiar, without sacrificing the low-level control and performance you expect from C-family languages.</p>
          </div>
          <div className="feature-card">
            <h3>Compile to C, Run Anywhere</h3>
            <p>Cirrus compiles to highly portable C code. This means if a C compiler exists for a platform, Cirrus can run on it—from high-end servers to tiny microcontrollers.</p>
          </div>
          <div className="feature-card">
            <h3>Open Source & Community-Driven</h3>
            <p>Built under the MIT license, Cirrus is free and open to everyone. Join our growing community and help shape the future of a language built for developers, by developers.</p>
          </div>
          <div className="feature-card">
            <h3>Lightweight by Design</h3>
            <p>Named after the light and wispy clouds, Cirrus is designed with a minimal core and standard library, ensuring fast compilation and efficient performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};