import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>Abhishek Singh</h1>
        <p>React Native Developer | Frontend Enthusiast</p>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Me Section */}
      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>
          Hi! I'm Abhishek Singh, a passionate React Native developer with experience in building intuitive and responsive mobile applications. I love learning new technologies and bringing ideas to life through code.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Trade App</h3>
            <p>A trading app developed using React Native, Redux, and RESTful APIs.</p>
          </div>
          <div className="project-item">
            <h3>Cuckoo App</h3>
            <p>A social app built with React Native and Redux for seamless user interactions.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me on <a href="mailto:Abhishek.singh@example.com">Abhishek.singh@example.com</a> or connect with me on LinkedIn.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Abhishek Singh. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
