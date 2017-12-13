import { combineReducers } from 'redux';

import universities from './universityReducer';
import auth from './../auth/auth/reducer';

const RootReducer = combineReducers({
    universities,
    auth
});

export default RootReducer;