import React, { Component } from "react";

import NavBar from "./nav-bar-const";

import StudioMaster from "../img/studiomaster.JPG"
import ThirtyOne from "../img/31.JPG";

class Projects extends Component {
    render(){
        return(
            <main className='project'>
                <NavBar />

                <section className="project__body">
                    <img src={StudioMaster} alt="StudioMaster" className="project__image"/>

                    <div className="project__info-box">
                        <h2 className="project__title">StudioMaster</h2>

                        <p className="project__description">
                            StudioMaster is a music collaboration platform with social media elements. Designed to give musicians and performers a simple platform to connect with each other and create together. 
                        </p>

                        <ul className="project__tech-list">
                            Technologies:
                            <li>React</li>
                            <li>Redux</li>
                            <li>MySQL</li>
                            <li>Howler.js</li>
                            <li>Node.js/Express</li>
                            <li>CSS/SCSS</li>
                        </ul>
                    </div>
                </section>

                <section className="project__body">
                    <img src={ThirtyOne} alt="ThirtyOneByThree" className="project__image"/>

                    <div className="project__info-box">
                        <h2 className="project__title">31 By 3</h2>

                        <p className="project__description">
                            31 is an old casino card game for 2-6 players. Myself and a team of two other developers created a playable version with  trash-talking AI opponents, single and multiplayer game modes, and a tabletop feel. Project URL: http://18.188.70.127/
                        </p>

                        <ul className="project__tech-list">
                            Technologies:
                            <li>C#</li>
                            <li>ASP.Net Core MVC</li>
                            <li>CSS/SCSS</li>
                            <li>Lots of AJAX</li>
                            <li>Custom Node.js API for card images</li>
                            <li>Deployed on AWS</li>
                        </ul>
                    </div>
                </section>

                <section className="portfolio">
                    <h2 className="portfolio__title">
                        And of course, this website!
                    </h2>

                    <ul className="portfolio__tech">

                    Technologies:
                        <li>React</li>
                        <li>Redux</li>
                        <li>CSS/SCSS</li>
                        <li>NodeMailer for email</li>
                        <li>Node.js/Express</li>
                    </ul>
                </section>

            </main>
        )
    }
}

export default Projects;