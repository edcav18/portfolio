import React from "react";
import { useEffect } from "react";
import "../css/PortfolioGrid.css"

function PortfolioGrid() {

    useEffect(() => {
        document.title = "Ed Cavallero | Projects";
    }, []);

    return (
        <section className="content">
            <h2>Recent Work</h2>
            <div className="project-grid">
                <div className="project" tabindex="0">
                    <h3>Project 1</h3>
                    <a href="https://github.com/edcav18" target="_blank" rel="noreferrer">
                    <img className="project1" src={`${process.env.PUBLIC_URL}/ECLogo.png`} alt="logo" />
                </a>
                </div>
                <div className="project" tabindex="0">
                    <h3>Project 2</h3>
                    <a href="https://github.com/edcav18" target="_blank" rel="noreferrer">
                    <img className="project1" src={`${process.env.PUBLIC_URL}/ECLogo.png`} alt="logo" />
                </a>
                </div>
                <div className="project" tabindex="0">
                    <h3>Project 3</h3>
                    <a href="https://github.com/edcav18" target="_blank" rel="noreferrer">
                    <img className="project1" src={`${process.env.PUBLIC_URL}/ECLogo.png`} alt="logo" />
                </a>
                </div>
                <div className="project" tabindex="0">
                    <h3>Project 4</h3>
                    <a href="https://github.com/edcav18" target="_blank" rel="noreferrer">
                    <img className="project1" src={`${process.env.PUBLIC_URL}/ECLogo.png`} alt="logo" />
                </a>
                </div>
            </div>
            <a className="github" href="https://github.com/edcav18" target="_blank" rel="noreferrer">View on Github</a>
        </section>
    );
}

export default PortfolioGrid