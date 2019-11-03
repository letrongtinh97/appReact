import AsyncStorage from '@react-native-community/async-storage';

// const url = `http://192.168.1.4:3000/`
const url = `https://project22tinh.herokuapp.com/`
const API = {
    login: url + `auth/login`,
    signup: url + `auth/signin`,
    profile: url + `users/get-a-user`,
}

// async function apiGetAll(username, password) {
//     try {
//         console.log(username, password)
// let response = await fetch(url + 'users/login', {
//     method: 'POST',
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         username,
//         password
//     })
// })
//         let responseJson = await response.json()
//         return responseJson
//     } catch (err) {
//         console.log(err)
//     }
// }

function customFetch(api, body = null, method = 'POST', contentType = 'application/json', accept = 'application/json') {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('token', (error, result) => {
            if (error) {
                reject(new Error('Unauthorize'))
            }
            const token = result
            const auth = token ? 'Bear ' + token : null
            fetch(api, {
                method,
                headers: {
                    Accept: accept,
                    'Content-Type': contentType,
                    Authorization: auth
                },
                body,
            }).then((success) => {
                // if (success.status !== 200) {
                //     reject(new Error('Error'))
                // }
                return success.json()
            }, (error) => {
                reject(new Error(error.message))
            }
            ).then((json) => {
                resolve({
                    code: 0,
                    res: json,
                })
            }, (err) => {
                // console.log('bbbb')
                reject(new Error(err.message))
            })
        })
    })
}
export { API, customFetch }