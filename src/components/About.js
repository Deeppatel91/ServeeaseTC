import React from 'react';
import './About.css'; // Import your CSS file for styling
import { FaApple, FaGooglePlay, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import logo from '../assets/image_with_white_bg (1).png'; // Import the logo image

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={logo} alt="ServeEase Logo" className="logo" />
        <h1>About ServeEase</h1>
        <p>Your Trusted Partner in Home and Corporate Services</p>
      </div>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong>ServeEase</strong>, your one-stop solution for all home maintenance and corporate service needs. We are dedicated to simplifying life for homeowners by connecting them with verified, reliable service providers. From electrical work and plumbing to gardening, lawn mowing, and car detailing, we ensure top-quality services at your convenience.
        </p>
        <p>
          Our platform is designed to provide a seamless experience, ensuring that every service request is handled with professionalism and care. Whether you need a quick fix or a long-term solution, ServeEase is here to make it happen.
        </p>
        <div className="platform-availability">
          <h3>Platform Availability</h3>
          <p>
            ServeEase is available on both <FaApple /> <strong>iOS</strong> and <FaGooglePlay /> <strong>Android</strong>. Download the app today and experience hassle-free service booking!
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="story-section">
        <h2>Our Story</h2>
        <p>
          ServeEase began as a capstone project with a simple yet powerful vision: to revolutionize the way homeowners access home maintenance services. What started as a small idea has now grown into a mission-driven platform, connecting thousands of homeowners with skilled professionals.
        </p>
        <p>
          Our journey has been fueled by a passion for innovation and a commitment to excellence. Today, we are proud to be a trusted name in the industry, bridging the gap between homeowners and service providers with transparency and reliability.
        </p>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At ServeEase, our mission is to empower homeowners by providing a reliable, efficient, and transparent platform for all their service needs. We strive to:
        </p>
        <ul>
          <li>Deliver exceptional service quality.</li>
          <li>Ensure customer satisfaction at every step.</li>
          <li>Support service providers with fair opportunities.</li>
          <li>Innovate continuously to improve user experience.</li>
        </ul>
      </section>

      {/* Our Team Section */}
      <section id="team" className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          Behind ServeEase is a team of passionate individuals dedicated to making a difference. Here are the key members who make it all possible:
        </p>
        <div className="team-members">
          <div className="member">
            <h3>Milan Patel</h3>
            <p>Software Manager</p>
          </div>
          <div className="member">
            <h3>Deep Patel</h3>
            <p>Software Developer</p>
          </div>
          <div className="member">
            <h3>Parth Patel</h3>
            <p>Mobile Application Developer</p>
          </div>
          <div className="member">
            <h3>Neeraj Kumar</h3>
            <p>Mobile Application Developer</p>
          </div>
          <div className="member">
            <h3>Mohmmad Sahil Shaikh</h3>
            <p>Web Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.
        </p>
        <div className="contact-info">
          <p>
            <FaEnvelope /> Email: <a href="mailto:info.serveease@gmail.com">info.serveease@gmail.com</a>
          </p>
          <p>
            <FaMapMarkerAlt /> Address: 160 Kendal Ave, Toronto, ON M5R 1M3
          </p>
          <p>
            <FaMapMarkerAlt /> Google Location:{' '}
            <a href="https://maps.app.goo.gl/7yhNVNVotb5dDMSLA" target="_blank" rel="noopener noreferrer">
              ServeEase on Google Maps
            </a>
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ServeEase. All rights reserved.</p>
        <p>
          Available on <FaApple /> iOS and <FaGooglePlay /> Android.
        </p>
      </footer>
    </div>
  );
}

export default About;