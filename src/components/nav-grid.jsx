import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavGrid extends Component {
    render(){
        return (
            <div className="nav__selections">
                <div className="nav__option-group">
                    <Link to="/" className="nav__navigation-option nav__navigation-option--header">
                        <h2 className="nav__option-text">Lawyer Helbling</h2>
                    </Link>
                </div>

                <div className="nav__option-group">
                    <Link to="/projects" className="nav__navigation-option nav__navigation-option--left">
                        <h2 className="nav__option-text">Projects</h2>
                    </Link>
                    <Link to="/contact" className="nav__navigation-option nav__navigation-option--right">
                        <h2 className="nav__option-text">Contact</h2>
                    </Link>
                </div>

                <div className="nav__option-group">
                    <Link to="/tech" className="nav__navigation-option nav__navigation-option--left">
                        <h2 className="nav__option-text">Technologies</h2>
                    </Link>
                    <Link to="/resume" className="nav__navigation-option nav__navigation-option--right">
                        <h2 className="nav__option-text">Resume</h2>
                    </Link>
                </div>

            </div>
        )
    }
}


export default NavGrid;