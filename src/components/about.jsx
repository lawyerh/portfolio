import React, { Component } from "react";
import { Link } from "react-router-dom";

import Seattle from "../img/seattle.jpg"

import NavGrid from "./nav-grid";


class About extends Component {
    render(){
        return (
            <nav className="nav">
                <div className="nav__background">
                    <div className="about-display">
                        <h1 className="about-display__header">
                            Lawyer Helbling
                        </h1>
                        <h3 className="about-display__title">
                            Full Stack Software Developer
                        </h3>
                        <div className="about-display__info">
                            <div className="about-display__about">
                                <figure className="about-display__img-box">
                                    <img src={Seattle} alt="Seattle" className="about-display__img"/>
                                </figure>
                                <p className="about-display__text">
                                    I am a Seattle native recently turned software developer that is fascinated with building things and love to collaborate.
                                </p>
                                <br/>
                                <br/>
                                <p className="about-display__text">
                                    Currently seeking new opportunities.
                                </p>
                                <br/>
                                <p className="about-display__text">
                                    <strong>Thank you for checking out my portfolio!</strong>
                                </p>
                            </div>

                            <div className="about-display__logos">
                                <a href="https://github.com/lawyerh" className="about-display__logo">
                                    <i className="fab fa-github"></i>
                                </a>

                                <a href="https://github.com/lawyerh" className="about-display__logo">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <NavGrid />
                </div>

            </nav>
        )
    }
}


export default About;