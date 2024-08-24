import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe'; 
import SkillList from './components/SkillList'; 
import ProjectList from './components/ProjectList'; 
import ContactInfo from './components/ContactInfo'; 
import ContactMe from './components/ContactMe'; 
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Rishi Sharma: Portfolio</h1>
      </header>
      <div className="top-row">
        <Navbar />
        <div className="main-content">
          <section id="about-me">
            <AboutMe />
          </section>
          <section id="skills">
            <SkillList />
          </section>
          <section id="projects">
            <ProjectList />
          </section>
          <section id="contact-info">
            <ContactInfo />
          </section>
          <section id="contact-me">
            <ContactMe />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

