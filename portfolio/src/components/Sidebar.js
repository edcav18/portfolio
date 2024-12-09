import React from "react";
import "../css/Sidebar.css"

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>C</li>
                </ul>
            </div>
            <div className="contact-info">
                <h3>Contact Info</h3>
                <p>Email: </p><a href="mailto:cavaller@bu.edu">cavaller@bu.edu</a>
                <p>LinkedIn:</p><a href="https://www.linkedin.com/in/edoardocavallero/" target="_blank" rel="noreferrer">Visit Profile</a>
            </div>
        </aside>
    );
}

export default Sidebar