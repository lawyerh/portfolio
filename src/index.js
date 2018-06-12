import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import './master.css';

import NavGrid from "./components/nav-grid";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={NavGrid} />
                </Switch>
            </BrowserRouter>
        </div>
    , document.getElementById('root'));

