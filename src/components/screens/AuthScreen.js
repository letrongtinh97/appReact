import React from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
import { API, customFetch } from '../../networking/services'

class AuthScreen extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        const { navigation, setProfile } = this.props
        // const user = await AsyncStorage.getItem('user');
        // navigation.navigate(user ? 'App' : 'SignIn');

        const data = JSON.parse(await AsyncStorage.getItem('user'))
        let body = null
        if (data) {
            body = JSON.stringify({
                username: data.user_username,
                password: data.user_password
            })
        } else {
            body = JSON.stringify({
                username: 'admin',
                password: '123456'
            })
        }
        customFetch(API.profile, body).then(
            async (success) => {
                const { code, data } = success.res
                if (code === 0) {
                    await AsyncStorage.setItem('profile', JSON.stringify(data))
                    setProfile(data)
                    navigation.navigate('App');
                }
                else {
                    await AsyncStorage.clear();
                    navigation.navigate('SignIn');
                }
            },
            (async () => {
                await AsyncStorage.clear();
                navigation.navigate('SignIn');
            })
        )
    }

    // Render any loading content that you like here
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'rgba(52,52,52,0.8)' }}>
                <StatusBar barStyle="default" />
                <ActivityIndicator />
            </View>
        );
    }
}

AuthScreen.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.func,
        PropTypes.bool,
        PropTypes.object,
    ])),
    setProfile: PropTypes.func.isRequired
}
// const mapStateToProps = state => {
//     return {
//         username: state.reducerLogin.username,
//         password: state.reducerLogin.password,
//         validUsername: state.reducerLogin.validUsername,
//         validPass: state.reducerLogin.validPass,
//     };
// };

const mapDispatchToProps = dispatch => {
    return {
        // setUsername: username => {
        //     dispatch(actions.setUsername(username));
        // },
        // setPassword: password => {
        //     dispatch(actions.setPassword(password));
        // },
        setProfile: profile => {
            dispatch(actions.setProfile(profile))
        }
    }
}

export default connect(null, mapDispatchToProps)(AuthScreen);