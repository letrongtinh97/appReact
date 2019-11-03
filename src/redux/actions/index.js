import * as types from './types.js'

export const setUsername = username => {
    return {
        type: types.USERNAME,
        username
    }
}

export const setPassword = password => {
    return {
        type: types.PASSWORD,
        password
    }
}

export const setProfile = profile => {
    return {
        type: types.PROFILE,
        profile
    }
}

export const setValid = (validUsername, validPass) => {
    return {
        type: types.VALID,
        validUsername,
        validPass
    }
}

export const registerName = name => {
    return {
        type: types.REGISTER_NAME,
        name
    }
}
export const registerCMND = CMND => {
    return {
        type: types.REGISTER_CMND,
        CMND
    }
}
export const registerUsername = username => {
    return {
        type: types.REGISTER_USERNAME,
        username
    }
}
export const registerPassword = password => {
    return {
        type: types.REGISTER_PASSWORD,
        password
    }
}
export const registerAddress = address => {
    return {
        type: types.REGISTER_ADDRESS,
        address
    }
}
export const registerEmail = email => {
    return {
        type: types.REGISTER_EMAIL,
        email
    }
}
export const registerPhone = phone => {
    return {
        type: types.REGISTER_PHONE,
        phone
    }
}
export const registerValid = (validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone) => {
    return {
        type: types.REGISTER_VALID,
        validName,
        validCmnd,
        validUsername,
        validPassword,
        validAddress,
        validEmail,
        validPhone
    }
}