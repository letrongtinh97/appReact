import React from "react";
import {
    View,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Text,
    Image
} from "react-native";
import FloatingInput from "../../../common/FloatingInput";
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from "prop-types";
import Snackbar from '../../../common/SnackBar'
import * as actions from '../../../redux/actions'
import { API, customFetch } from '../../../networking/services'

const imgBackground = "../../../assets/wallpaper.png";
const logo = "../../../assets/logo.png";

class LoginScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        // this.state = {
        //     username: "",
        //     password: "",
        //     validUsername: '',
        //     validPass: '',
        // };
    }

    valid() {
        const { username, password, setValid } = this.props
        // const {  } = this.state
        let validUsername = '', validPass = ''
        if (username === '' && password === '') {
            // this.setState({
            validUsername = 'Please input username',
                validPass = 'Please input password'
            // })
            setValid(validUsername, validPass)
            return false
        }
        if (username === '') {
            // this.setState({
            validUsername = 'Please input username',
                validPass = ''
            // })
            setValid(validUsername, validPass)
            return false
        }
        if (password === '') {
            // this.setState({
            validUsername = '',
                validPass = 'Please input password'
            // })
            setValid(validUsername, validPass)
            return false
        }
        return true
    }

    handleLogin = () => {
        const { username, password, navigation, setValid } = this.props;
        // const {  } = this.state
        // const { username, password } = this.state
        if (this.valid()) {
            // this.setState({
            //     validUsername: '',
            //     validPass: ''
            // })
            setValid('', '')
            const body = {
                username,
                password
            }
            customFetch(API.login, JSON.stringify(body)).then(
                async (success) => {
                    const { code, data, token } = success.res
                    if (code === 0 && data.length > 0) {
                        // console.log(data)
                        await AsyncStorage.setItem('token', token)
                        await AsyncStorage.setItem('user', JSON.stringify(data[0]))
                        navigation.navigate("Vid");
                    }
                    else {
                        this.snack.ShowSnackBarFunction('Invalid username or password');
                    }
                },
                ((error) => {
                    this.snack.ShowSnackBarFunction(error.message);
                })
            )
        }
    };

    handleRegister = () => {
        const { navigation } = this.props;
        navigation.navigate("SignUp");
    };

    handleChangePass = () => {
        const { navigation } = this.props;
        navigation.navigate("Reset");
    };

    render() {
        // const { validUsername, validPass } = this.state;
        const { username, password, validUsername, validPass, setUsername, setPassword } = this.props
        // const {  } = this.state
        // console.log(username)
        // console.log(pass)
        return (
            <ImageBackground style={{ flex: 1 }} source={require(imgBackground)}>
                <StatusBar barStyle="dark-content" />
                <View
                    style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
                >
                    <Image
                        source={require(logo)}
                        style={{
                            width: 200,
                            height: 200
                        }}
                    />
                </View>
                <View style={{ flex: 0.5 }}>
                    <View
                        style={{
                            justifyContent: "center",
                            marginLeft: 20,
                            marginRight: 20
                        }}
                    >
                        <FloatingInput
                            label="Username"
                            value={username}
                            onChangeText={text => setUsername(text)}
                            isBlur={username === "" ? false : true}
                            mess={validUsername}
                        // isValid={false}
                        />
                    </View>
                    <View
                        style={{
                            justifyContent: "center",
                            marginLeft: 20,
                            marginRight: 20
                        }}
                    >
                        <FloatingInput
                            label="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                            isBlur={password === "" ? false : true}
                            mess={validPass}
                        // isValid={false}
                        // keyboardType={'numeric'}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this.handleLogin}
                        style={{
                            backgroundColor: "rgba(186, 91, 183, 0.8)",
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 20,
                            borderRadius: 100
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 20,
                                fontFamily: "sans-serif-medium",
                                padding: 10,
                                color: "white"
                            }}
                        >
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20,
                        marginRight: 20
                    }}>
                        <TouchableOpacity onPress={this.handleRegister}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 14,
                                    fontFamily: "sans-serif-medium",
                                    padding: 10,
                                    color: "white"
                                }}
                            >
                                Create Account
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handleChangePass}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 14,
                                    fontFamily: "sans-serif-medium",
                                    padding: 10,
                                    color: "white"
                                }}
                            >
                                Change Password
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Snackbar
                    visible={visible}
                    onDismiss={() => this.setState({ visible: !visible })}
                    action={{
                        label: 'OK',
                        onPress: () => this.setState({ visible: !visible }),
                    }}
                >
                    Hey there! I am a Snackbar.
                </Snackbar> */}
                <Snackbar
                    ref={(ref) => {
                        this.snack = ref
                    }}
                />
            </ImageBackground>
        );
    }
}
LoginScreen.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.func,
            PropTypes.bool,
            PropTypes.object
        ])
    ),
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    validUsername: PropTypes.string.isRequired,
    validPass: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setValid: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        username: state.reducerLogin.username,
        password: state.reducerLogin.password,
        validUsername: state.reducerLogin.validUsername,
        validPass: state.reducerLogin.validPass,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUsername: username => {
            dispatch(actions.setUsername(username));
        },
        setPassword: password => {
            dispatch(actions.setPassword(password));
        },
        setValid: (validUsername, validPassword) => {
            dispatch(actions.setValid(validUsername, validPassword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);