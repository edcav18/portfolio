import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Services.css";

function Services() {
  useEffect(() => {
    document.title = "Ed Cavallero | Services";
  }, []);

  return (
    <section className="services">
      <h1>Services</h1>
      <div className="services-list">
        <div>
          <h3>Web Development Services</h3>
          <ul>
            <li>Custom Website Design & Development</li>
            <li>Responsive & Mobile-Friendly Websites</li>
            <li>E-Commerce Solutions</li>
            <li>Web Application Development</li>
          </ul>
        </div>
        <div>
          <h3>Programming & Software Development</h3>
          <ul>
            <li>Custom Software Solutions</li>
            <li>API Integration</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
        <div>
          <h3>Performance & Maintenance</h3>
          <ul>
            <li>Website Speed & SEO Optimization</li>
            <li>Ongoing Maintenance & Support</li>
            <li>Security Enhancements</li>
          </ul>
        </div>
        <div>
          <h3>Consultation & Strategy</h3>
          <ul>
            <li>Technical Consulting & Project Planning</li>
            <li>Code Review & Optimization</li>
          </ul>
        </div>
      </div>
      <Link to={"/contact"}>Contact</Link>
    </section>
  );
}

export default Services;
