import * as types from '../actions/types.js'
const initialState = {
    username: '',
    password: '',
    cmnd: '',
    name: '',
    address: '',
    email: '',
    phone: '',
    validUsername: '',
    validPassword: '',
    validName: '',
    validCmnd: '',
    validAddress: '',
    validEmail: '',
    validPhone: ''
};

const reducerRegister = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_NAME: {
            return {
                ...state,
                name: action.name || ''
            };
        }
        case types.REGISTER_CMND: {
            return {
                ...state,
                cmnd: action.CMND || ''
            };
        }
        case types.REGISTER_USERNAME: {
            return {
                ...state,
                username: action.username || ''
            };
        }
        case types.REGISTER_PASSWORD: {
            return {
                ...state,
                password: action.password || ''
            };
        }
        case types.REGISTER_ADDRESS: {
            return {
                ...state,
                address: action.address || ''
            };
        }
        case types.REGISTER_EMAIL: {
            return {
                ...state,
                email: action.email || ''
            };
        }
        case types.REGISTER_PHONE: {
            return {
                ...state,
                phone: action.phone || ''
            };
        }
        case types.REGISTER_VALID: {
            return {
                ...state,
                validUsername: action.validUsername || '',
                validPassword: action.validPassword || '',
                validName: action.validName || '',
                validCmnd: action.validCmnd || '',
                validAddress: action.validAddress || '',
                validEmail: action.validEmail || '',
                validPhone: action.validPhone || ''
            };
        }
        default:
            return state;
    }
}

export default reducerRegister