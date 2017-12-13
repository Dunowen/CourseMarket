import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/reducers';
import { i18nReducer } from 'react-redux-i18n';

export default function configureStore(initialState) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        combineReducers({
            reducers: RootReducer,
            i18n: i18nReducer
        }),
        initialState,
        composeEnhancers(applyMiddleware(thunk)));
}
