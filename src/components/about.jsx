import React, { Component } from "react";

import NavGrid from "./nav-grid";

class About extends Component {
    render(){
        return (
            <nav className="nav">
                <div className="nav__background">
                    <div className="nav__display">
                        <h1 className="heading-primary">
                            Lawyer Helbling
                        </h1>
                    </div>
                    <NavGrid />
                </div>

            </nav>
        )
    }
}


export default About;