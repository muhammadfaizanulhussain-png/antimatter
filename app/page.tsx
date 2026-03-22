import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to Digital Darwaaza</h1>
        <p>Your gateway to digital solutions.</p>
        <button>Get Started</button>
      </header>
      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">Service 1</div>
          <div className="service">Service 2</div>
          <div className="service">Service 3</div>
        </div>
      </section>
      <section className="portfolio-preview">
        <h2>Our Portfolio</h2>
        <div className="portfolio">
          <div className="portfolio-item">Project 1</div>
          <div className="portfolio-item">Project 2</div>
          <div className="portfolio-item">Project 3</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
