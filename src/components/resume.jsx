import React, { Component } from "react";

import { Link } from "react-router-dom";

import NavBar from "./nav-bar";

import MyResume from "../img/LawyerHelblingResumeFinal.pdf";

class Resume extends Component {
    render() {
        return (
            <main className="resume">
                <Link to="/" className="resume__back">
                    <span className="resume__back-arrow">&larr;</span>
                </Link>
                <NavBar />
                <object className="resume__pdf" data={MyResume}></object>
            </main>
        )
    }
}

export default Resume;