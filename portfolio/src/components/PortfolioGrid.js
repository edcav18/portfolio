import React from "react";
import "../css/PortfolioGrid.css"

function PortfolioGrid() {
    return (
        <section className="content">
            <h2>Portfolio</h2>
            <div className="project-grid">
                <div className="project" tabindex="0">
                    <h3>Project 1</h3>
                    <p>Picture of Project 1</p>
                </div>
                <div className="project" tabindex="0">
                    <h3>Project 2</h3>
                    <p>Picture of Project 2</p>
                </div>
                <div className="project" tabindex="0">
                    <h3>Project 3</h3>
                    <p>Picture of Project 3</p>
                </div>
                <div className="project" tabindex="0">
                    <h3>Project 4</h3>
                    <p>Picture of Project 4</p>
                </div>
            </div>
        </section>
    );
}

export default PortfolioGrid