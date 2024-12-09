import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css"

function Header() {
    return (
        <header>
            <div className="header-left">
                <Link to={"/portfolio"}>
                    <img className="logo" src={`${process.env.PUBLIC_URL}/ECLogo.png`} alt="Logo" />
                </Link>
                <Link to={"/portfolio"} className="brand-name">
                    Ed Cavallero
                </Link>
            </div>
            <nav className="header-right">
            <Link to={"/portfolio"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <a href="https://www.linkedin.com/in/edoardocavallero/" target="_blank" rel="noreferrer">LinkedIn</a>
                <Link to={"/projects"}>Projects</Link>
                <Link to={"/services"}>Services</Link>
                <Link to={"contact"}>Contact</Link>
            </nav>
        </header>
    );
}

export default Header