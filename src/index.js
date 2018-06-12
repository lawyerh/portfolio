import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import './master.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
        <div>
            Hello
        </div>
    , document.getElementById('root'));

