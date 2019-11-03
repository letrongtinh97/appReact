import * as types from '../actions/types.js'
const initialState = {
    username: '',
    password: '',
    profile: {},
    validUsername: '',
    validPass: ''
};

const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.USERNAME: {
            return {
                ...state,
                username: action.username || ''
            };
        }
        case types.PASSWORD: {
            return {
                ...state,
                password: action.password || ''
            };
        }
        case types.PROFILE: {
            return {
                ...state,
                profile: action.profile || {}
            };
        }
        case types.VALID: {
            return {
                ...state,
                validUsername: action.validUsername || '',
                validPass: action.validPass || '',
            };
        }
        default:
            return state;
    }
}

export default reducerLogin