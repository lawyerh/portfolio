import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import RootReducer from "./reducers/index";

import './master.css';

import About from "./components/about";
import Contact from "./components/contact";
import Technologies from "./components/tech";
import Resume from "./components/resume";
import Projects from "./components/projects";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
        <div>
            <Provider store={createStoreWithMiddleware(RootReducer)}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/contact" component={Contact} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/tech" component={Technologies} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/" component={About} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    , document.getElementById('root'));

