import React from "react";
import "../css/Home.css"
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="home-content">
            <img className="home-banner" src={`${process.env.PUBLIC_URL}/images/san-diego-landscape.jpg`} alt="" />
            <h3 className="title">Welcome.</h3>
            <p className="subtitle">Hi, I'm Ed Cavallero, a passionate software developer dedicated to crafting innovative and user-centric solutions. <p></p>With a focus on creativity and precision, I strive to design impactful digital experiences that make a difference for individuals and businesses alike.</p>
            <img className="home-image" src={`${process.env.PUBLIC_URL}/images/Profile.jpg`} alt="" />
            <nav className="links">
                <Link to={"/about"}>Learn More</Link>
                <Link to={"/projects"}>View my work</Link>
                <Link to={"/services"}>List of Services</Link>
            </nav>
        </div>
    );
}

export default Home