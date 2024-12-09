import React from "react";
import { Link } from "react-router-dom";
import "../css/PortfolioGrid.css"

function PortfolioGrid() {
    return (
        <section className="content">
            <h2>Recent Work</h2>
            <div className="project-grid">
                <div className="project" tabindex="0">
                    <h3>Logo Design</h3>
                    <Link to={"/portfolio"}>
                    <img className="project1" src={`${process.env.PUBLIC_URL}/ECLogo.png`} alt="Logo" />
                </Link>
                </div>
                <div className="project" tabindex="0">
                    <h3>Project 2</h3>
                    <Link to={"/portfolio"}>
                    <img className="project1" src={`${process.env.PUBLIC_URL}/ECLogo.png`} alt="Logo" />
                </Link>
                </div>
                <div className="project" tabindex="0">
                    <h3>Project 3</h3>
                    <Link to={"/portfolio"}>
                    <img className="project1" src={`${process.env.PUBLIC_URL}/ECLogo.png`} alt="Logo" />
                </Link>
                </div>
                <div className="project" tabindex="0">
                    <h3>Project 4</h3>
                    <Link to={"/portfolio"}>
                    <img className="project1" src={`${process.env.PUBLIC_URL}/ECLogo.png`} alt="Logo" />
                </Link>
                </div>
            </div>
        </section>
    );
}

export default PortfolioGrid