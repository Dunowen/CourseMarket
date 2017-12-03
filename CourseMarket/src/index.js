import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';

import './index.css';
import Root from './components/Root/Root';
import configureLocalStore from './redux/store/configureStore';
import translations from './config/translation';

const translationsObject = translations;

let store = configureLocalStore();

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('hu'));

ReactDOM.render(
    <BrowserRouter>
        <Root store={store} />
    </BrowserRouter>,
    document.getElementById('root')
);