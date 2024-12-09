import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import "../css/Services.css"

function Services() {

    useEffect(() => {
        document.title = "Ed Cavallero | Services";
      }, []);

    return (
        <section className="services">
            <h1>Services</h1>
            <p>
            <h3>Web Development Services</h3>
            <ul>
                <li>Custom Website Design & Development</li>
                <li>Responsive & Mobile-Friendly Websites</li>
                <li>E-Commerce Solutions</li>
                <li>Web Application Development</li>
            </ul>

            <h3>Programming & Software Development</h3>
            <ul>
                <li>Custom Software Solutions</li>
                <li>API Development & Integration</li>
                <li>Mobile App Development (iOS & Android)</li>
            </ul>

            <h3>Performance & Maintenance</h3>
            <ul>
                <li>Website Speed & SEO Optimization</li>
                <li>Ongoing Maintenance & Support</li>
                <li>Security Audits & Enhancements</li>
            </ul>

            <h3>Consultation & Strategy</h3>
            <ul>
                <li>Technical Consulting & Project Planning</li>
                <li>Code Review & Optimization</li>
            </ul>
            </p>
            <Link to={"/contact"}>Contact</Link>
        </section>
    );
}

export default Services