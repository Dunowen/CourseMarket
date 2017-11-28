import { combineReducers } from 'redux';

import universities from './universityReducer';


const RootReducer = combineReducers({
    universities
});

export default RootReducer;