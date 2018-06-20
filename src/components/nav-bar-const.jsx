import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBarConst extends Component {
    render() {
        return (
            <nav className="navbar-const">
                <h2 className="navbar-const__brand">
                    Lawyer Helbling
                </h2>

                <Link to="/" className="navbar-const__link">
                    <i className="fas fa-user-circle navbar-const__icon"></i>
                </Link>

                <Link to="/tech" className="navbar-const__link">
                    <i className="fab fa-js-square navbar-const__icon"></i>
                </Link>

                <Link to="/projects" className="navbar-const__link">
                    <i className="fab fa-connectdevelop navbar-const__icon"></i>
                </Link>

                <Link to="/contact" className="navbar-const__link">
                    <i className="far fa-envelope navbar-const__icon"></i>
                </Link>

                <Link to="/resume" className="navbar-const__link navbar-const__link-plain">Resume</Link>
            </nav>
        )
    }
}

export default NavBarConst;