import { combineReducers } from "redux";
import reducerLogin from './reducerLogin.js';
import reducerRegister from './reducerRegister.js'

export default combineReducers({
    reducerLogin,
    reducerRegister
});