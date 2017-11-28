import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/reducers';

export default function configureStore(initialState) {
    // Only if the Redux development tool extension is available.
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    return createStore (
        RootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk)));
}
