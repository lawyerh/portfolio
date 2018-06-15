import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h2 className="navbar__brand">
                    Lawyer Helbling
                </h2>

                <Link to="/" className="navbar__link">
                    <i className="fas fa-user-circle navbar__icon"></i>
                </Link>

                <Link to="/tech" className="navbar__link">
                    <i className="fab fa-js-square navbar__icon"></i>
                </Link>

                <Link to="/projects" className="navbar__link">
                    <i className="fab fa-connectdevelop navbar__icon"></i>
                </Link>

                <Link to="/contact" className="navbar__link">
                    <i className="far fa-envelope navbar__icon"></i>
                </Link>

                <Link to="/resume" className="navbar__link navbar__link-plain">Resume</Link>
            </nav>
        )
    }
}

export default NavBar;