import React, { Component } from "react";
import { Link } from "react-router-dom";

import Seattle from "../img/seattle.jpg"

import NavGrid from "./nav-grid";
import NavBar from "./nav-bar";


class About extends Component {
    render(){
        return (
            <main>
                <NavBar />
                <nav className="nav">
                    <div className="nav__background">
                        <div className="about-display">
                            <div className="about-display__header-background">
                                <h1 className="about-display__header">
                                    Lawyer Helbling
                                </h1>
                                <h3 className="about-display__title">
                                    Full Stack Software Developer
                                </h3>
                            </div>

                            <div className="about-display__logos">
                                <a href="https://github.com/lawyerh" className="about-display__logo">
                                    <i className="fab fa-github"></i>
                                </a>

                                <a href="https://github.com/lawyerh" className="about-display__logo">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>

                            <div className="about-display__info">
                                <div className="about-display__about">
                                    <p className="about-display__text">
                                        I am a Seattle native recently turned software developer that is fascinated with building things and loves to collaborate.
                                    </p>

                                    <p className="about-display__text">
                                        Currently seeking new opportunities.
                                    </p>

                                    <p className="about-display__text">
                                        <strong>Thank you for viewing my portfolio!</strong>
                                    </p>
                                </div>
                            </div>

                        </div>
                        <NavGrid />
                    </div>
                </nav>
            </main>
        )
    }
}


export default About;