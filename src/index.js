import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import './master.css';

import About from "./components/about";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={About} />
                </Switch>
            </BrowserRouter>
        </div>
    , document.getElementById('root'));

