import React from 'react';

export const GetStarted: React.FC = () => {
  return (
    <section id="getting-started" className="get-started-section">
      <div className="container">
        <h2>Get Started</h2>
        <p className="section-intro">
          Cirrus is in the early stages of development. While there's no official release yet, you can see how simple the language is.
        </p>
        <h3>Hello, World</h3>
        <p>Here’s your first program in Cirrus:</p>
        <pre>
          <code className="language-cirrus">
            {`// Import the standard I/O library
import std::io;

// The main function, entry point of the program
func main() {
    io.println("Hello, World!");
}`}
          </code>
        </pre>
        <h3>Next Steps</h3>
        <p>The compiler is under active development. The best way to get involved, ask questions, and stay up-to-date is by joining our Discord community.</p>
      </div>
    </section>
  );
};