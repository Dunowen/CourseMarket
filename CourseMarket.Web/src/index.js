import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';

import './index.css';
import Root from './components/Root/Root';
import configureLocalStore from './redux/store/configureStore';
import translations from './config/translation';
import history from './utils/history';

let store = configureLocalStore();

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale('hu'));

ReactDOM.render(
    <Router history={history}>
        <Root store={store} />
    </Router>,
    document.getElementById('root')
);