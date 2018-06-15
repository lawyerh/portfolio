import React, { Component } from "react";
import { Link } from "react-router-dom";

import JS from "../img/javascript.png";
import ReactImg from "../img/react.png";
import ReduxImg from "../img/redux.png";
import Angular from "../img/angular.png";
import NodeImg from "../img/node.png";
import Csharp from "../img/csharp.png";
import Entity from "../img/entity.png";
import NetCore from "../img/netcore.png";
import MySql from "../img/mysql.png";
import Mongo from "../img/mongo.png";
import Git from "../img/git.png";
import AWS from "../img/aws.png";

import NavGrid from "./nav-grid";
import NavBar from "./nav-bar";


class Technologies extends Component {
    render(){
        return (
            <main>
                <NavBar />
                <nav className="nav">
                    <div className="nav__background">
                        <div className="tech-display">

                            <div className="tech-display__tech-box tech-display__tech-box--1">
                                <div className="tech-display__javascript">
                                    <div className="tech-display__image-box">
                                        <img src={JS} alt="Javascript" className="tech-display__image"/>
                                        <p className="tech-display__title">Javascript</p>
                                    </div>
                                    <div className="tech-display__image-box">
                                        <img src={ReactImg} alt="React" className="tech-display__image"/>
                                        <p className="tech-display__title">React</p>
                                    </div>
                                    <div className="tech-display__image-box">
                                        <img src={ReduxImg} alt="Redux" className="tech-display__image"/>
                                        <p className="tech-display__title">Redux</p>
                                    </div>
                                    <div className="tech-display__image-box">
                                        <img src={NodeImg} alt="Node.JS" className="tech-display__image"/>
                                        <p className="tech-display__title">Node.JS</p>
                                    </div>
                                    <div className="tech-display__image-box">
                                        <img src={Mongo} alt="MongoDB" className="tech-display__image"/>
                                        <p className="tech-display__title">MongoDB</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tech-display__tech-box tech-display__tech-box--2">
                                <div className="tech-display__csharp" >
                                    <div className="tech-display__image-box">
                                        <img src={Csharp} alt="C#" className="tech-display__image"/>
                                        <p className="tech-display__title--light">C#</p>
                                    </div>
                                    <div className="tech-display__image-box">
                                        <img src={NetCore} alt="Asp.net Core MVC" className="tech-display__image"/>
                                        <p className="tech-display__title--light">Asp.net Core</p>
                                    </div>
                                    <div className="tech-display__image-box">
                                        <img src={Entity} alt="Entity ORM" className="tech-display__image"/>
                                        <p className="tech-display__title--light">Entity ORM</p>
                                    </div>
                                    <div className="tech-display__image-box">
                                        <img src={Angular} alt="Angular 2+" className="tech-display__image"/>
                                        <p className="tech-display__title--light">Angular 2+</p>
                                    </div>
                                    <div className="tech-display__image-box">
                                        <img src={MySql} alt="MySQL" className="tech-display__image"/>
                                        <p className="tech-display__title--light">MySQL</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tech-display__tech-box tech-display__tech-box--3">
                                <div className="tech-display__other">
                                    <div className="tech-display__image-box tech-display__image-box--bottom">
                                        <p className="tech-display__title--light">Git/GitHub</p>
                                        <img src={Git} alt="Git/GitHub" className="tech-display__image"/>
                                    </div>
                                    <div className="tech-display__image-box tech-display__image-box--bottom">
                                        <p className="tech-display__title--light">AWS</p>
                                        <img src={AWS} alt="AWS" className="tech-display__image"/>
                                    </div>
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


export default Technologies;