import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import './index.css';
import Root from './components/Root/Root';
import configureLocalStore from './redux/store/configureStore'

let store = configureLocalStore();

ReactDOM.render(
    <BrowserRouter>
        <Root store={store} />
    </BrowserRouter>,
    document.getElementById('root')
);