import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css"

function Header() {
    return (
        <header>
            <Link to={"/"} className="header-left">Ed Cavallero</Link>
            <nav className="header-right">
                <Link to={"/about"}>About</Link>
                <a href="https://www.linkedin.com/in/edoardocavallero/" target="_blank" rel="noreferrer">LinkedIn</a>
                <Link to={"/portfolio"}>Projects</Link>
                <Link to={"/services"}>Services</Link>
                <Link to={"contact"}>Contact</Link>
            </nav>
        </header>
    );
}

export default Header