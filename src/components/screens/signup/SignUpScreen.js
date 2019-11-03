import React from "react";
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    ImageBackground
} from "react-native";
import FloatingInput from "../../../common/FloatingInput";
// import DateTimePicker from "react-native-modal-datetime-picker";
// import moment from "moment";
import PropTypes from "prop-types";
// import Icon from '../../../common/icons'
import Header from '../../../common/HeaderApp'
import Snackbar from '../../../common/SnackBar'
import { API, customFetch } from '../../../networking/services'
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions'
const imgBackground = "../../../assets/background.png";
const logo = "../../../assets/logo.png";

class SignUpScreen extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            username: '',
            password: '',
            address: '',
            cmnd: '',
            phone: '',
            email: '',
            validUsername: '',
            validPass: '',
            validCMND: '',
            validEmail: '',
            validPhone: '',
            validName: '',
            validAddress: '',
            verifyName: false,
            // birthday: moment().format('DD-MM-YYYY'),
            // isVisible: false,
        }
    }

    // togglePicker = () => {
    //     const { isVisible } = this.state
    //     this.setState({ isVisible: !isVisible });
    // };

    // handleDatePicked = (date) => {
    //     const { birthday } = this.state
    //     let newDate = birthday
    //     if (moment(date) > moment()) {
    //         newDate = moment(date).format('DD-MM-YYYY')
    //     }
    //     else {
    //         newDate = moment().format('DD-MM-YYYY')
    //     }
    //     this.setState({ birthday: newDate })
    //     this.togglePicker();
    // };

    valid = () => {
        const { username, password, cmnd, phone, email, address, name, registerValid } = this.props
        let validName = '', validCmnd = '', validUsername = '', validPassword = '', validAddress = '',
            validEmail = '', validPhone = ''
        if (username === '' && password === '' && cmnd === '' && phone === '' && email === '' && name === '' && address === '') {
            // this.setState({
            validUsername = 'Please input username',
                validPassword = 'Please input password',
                validCmnd = 'Please input cmnd',
                validPhone = 'Please input phone number',
                validAddress = 'Please input address',
                validEmail = 'Please input email',
                validName = 'Please input name'
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        if (name === '') {
            // this.setState({
            validName = 'Please input name',
                validPassword = '',
                validCmnd = '',
                validPhone = '',
                validAddress = '',
                validEmail = '',
                validUsername = ''
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        if (cmnd === '') {
            // this.setState({
            validCmnd = 'Please input cmnd',
                validPassword = '',
                validUsername = '',
                validPhone = '',
                validAddress = '',
                validEmail = '',
                validName = ''
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        if (cmnd.length > 8) {
            // this.setState({
            validCmnd = 'Limit is 8',
                validPassword = '',
                validUsername = '',
                validPhone = '',
                validAddress = '',
                validEmail = '',
                validName = ''
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        if (username === '') {
            // this.setState({
            validUsername = 'Please input username',
                validPassword = '',
                validCmnd = '',
                validPhone = '',
                validAddress = '',
                validEmail = '',
                validName = ''
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        if (password === '') {
            // this.setState({
            validPassword = 'Please input password',
                validUsername = '',
                validCmnd = '',
                validPhone = '',
                validAddress = '',
                validEmail = '',
                validName = ''
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        if (address === '') {
            // this.setState({
            validAddress = 'Please input address',
                validPassword = '',
                validCmnd = '',
                validPhone = '',
                validUsername = '',
                validEmail = '',
                validName = ''
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        if (email === '') {
            // this.setState({
            validEmail = 'Please input email',
                validPassword = '',
                validCmnd = '',
                validPhone = '',
                validAddress = '',
                validUsername = '',
                validName = ''
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        const regEmail = /^[a-z0-9.]+@[a-z0-9]+(\.[a-z0-9]+)+$/i;
        if (!regEmail.test(email)) {
            // this.setState({
            validEmail = 'Wrong type of email',
                validPassword = '',
                validCmnd = '',
                validPhone = '',
                validAddress = '',
                validUsername = '',
                validName = ''
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        if (phone.length === '') {
            // this.setState({
            validPhone = 'Please input phone number',
                validPassword = '',
                validCmnd = '',
                validUsername = '',
                validAddress = '',
                validEmail = '',
                validName = ''
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        if (phone.length > 10) {
            // this.setState({
            validPhone = 'Limit is 10',
                validPassword = '',
                validCmnd = '',
                validUsername = '',
                validAddress = '',
                validEmail = '',
                validName = ''
            // })
            registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone)
            return false
        }
        return true
    }

    handleSignUp = () => {
        const { navigation, username, password, address, name, cmnd, phone, email, registerValid } = this.props
        if (this.valid()) {
            // // this.setState({
            //     validUsername: '',
            //     validPass: '',
            //     validCMND: '',
            //     validPhone: '',
            //     validAddress: '',
            //     validEmail: '',
            //     validName: ''
            // // })
            registerValid('', '', '', '', '', '', '')
            const body = {
                user_name: name,
                user_cmnd: cmnd,
                user_phone: phone,
                user_address: address,
                user_mail: email,
                user_password: password,
                user_username: username
            }

            customFetch(API.signup, JSON.stringify(body)).then(
                (success) => {
                    const { code } = success.res
                    // console.log(code)
                    if (code === 0) {
                        navigation.goBack()
                    }
                    if (code === 1) {
                        this.snack.ShowSnackBarFunction('Error');
                    }
                    if (code === 3) {
                        this.snack.ShowSnackBarFunction('Exist username already');
                    }
                    else {
                        this.snack.ShowSnackBarFunction('Server has error');
                    }
                },
                ((error) => {
                    // console.log(error)
                    this.snack.ShowSnackBarFunction(error.message);
                })
            )
        }
        else {
            this.setState({ verifyName: true })
        }
    }

    render() {
        const {
            navigation,
            username,
            password,
            address,
            name,
            cmnd,
            phone,
            email,
            validUsername,
            validCmnd,
            validEmail,
            validPassword,
            validPhone,
            validAddress,
            validName,
            registerName,
            registerCMND,
            registerUsername,
            registerPassword,
            registerAddress,
            registerPhone,
            registerEmail
        } = this.props
        return (
            <ImageBackground style={{ flex: 1 }} source={require(imgBackground)}>
                <ScrollView>
                    <StatusBar barStyle="dark-content" />
                    <Header headerName='Sign Up' isBack={true} navigation={navigation} />
                    {/* <View style={{ alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>SignUp</Text>
                </View> */}
                    <View
                        style={{ flex: 0.4, justifyContent: "center", alignItems: "center" }}
                    >
                        <Image
                            source={require(logo)}
                            style={{
                                width: 200,
                                height: 200
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 0.6,
                            justifyContent: "center",
                            marginLeft: 20,
                            marginRight: 20
                        }}
                    >
                        <FloatingInput
                            label="Name"
                            value={name}
                            onChangeText={text => registerName(text)}
                            isBlur={name === "" ? false : true}
                            mess={validName}
                        // isValid={verifyName}
                        />
                        <FloatingInput
                            label="CMND"
                            value={cmnd}
                            onChangeText={text => registerCMND(text)}
                            isBlur={cmnd === "" ? false : true}
                            keyboardType={'numeric'}
                            mess={validCmnd}
                        // isValid={cmnd === '' ? true : false}
                        />
                        <FloatingInput
                            label="Username"
                            value={username}
                            onChangeText={text => registerUsername(text)}
                            isBlur={username === "" ? false : true}
                            mess={validUsername}
                        // isValid={username === "" ? true : false}
                        // keyboardType={'numeric'}
                        />
                        <FloatingInput
                            label="Password"
                            value={password}
                            onChangeText={text => registerPassword(text)}
                            secureTextEntry={true}
                            isBlur={password === "" ? false : true}
                            mess={validPassword}
                        // isValid={password === "" ? true : false}
                        // keyboardType={'numeric'}
                        />
                        <FloatingInput
                            label="Address"
                            value={address}
                            onChangeText={text => registerAddress(text)}
                            isBlur={address === "" ? false : true}
                            mess={validAddress}
                        // isValid={address === "" ? true : false}
                        />
                        <FloatingInput
                            label="Email"
                            value={email}
                            onChangeText={text => registerEmail(text)}
                            isBlur={email === "" ? false : true}
                            keyboardType={'email-address'}
                            mess={validEmail}
                        // isValid={email === "" ? true : false}
                        />
                        <FloatingInput
                            label="Phone"
                            value={phone}
                            onChangeText={text => registerPhone(text)}
                            isBlur={phone === "" ? false : true}
                            keyboardType={'phone-pad'}
                            mess={validPhone}
                        // isValid={phone === "" ? true : false}
                        />
                    </View>
                    {/* <View style={{
                    margin: 20
                }}>
                    <Text style={{ fontSize: 18, color: 'yellow' }}>Birthday: </Text>
                    <TouchableOpacity
                        onPress={this.togglePicker}
                        style={{ justifyContent: 'space-between', backgroundColor: 'rgba(52, 52, 52, 0.8)', marginTop: 20, borderRadius: 100, flexDirection: 'row' }}
                    >
                        <Text style={{ fontSize: 20, color: 'white', margin: 10 }}>
                            {birthday}
                        </Text>
                        <Icon.FontAwesome name='calendar' style={{ fontSize: 20, color: 'white', margin: 10, padding: 5 }} />
                    </TouchableOpacity>
                </View>
                <DateTimePicker
                    isVisible={isVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.togglePicker}
                /> */}
                    <TouchableOpacity onPress={this.handleSignUp} style={{ margin: 20, padding: 10, alignItems: 'center', backgroundColor: 'rgb(233, 120, 60)', marginTop: 20, borderRadius: 100 }}><Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>SignUp</Text></TouchableOpacity>
                    <Snackbar
                        ref={(ref) => {
                            this.snack = ref
                        }}
                    />
                </ScrollView>
            </ImageBackground>
        );
    }
}
SignUpScreen.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.func,
            PropTypes.bool,
            PropTypes.object
        ])
    ),
    name: PropTypes.string.isRequired,
    cmnd: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    validName: PropTypes.string.isRequired,
    validCmnd: PropTypes.string.isRequired,
    validUsername: PropTypes.string.isRequired,
    validPassword: PropTypes.string.isRequired,
    validAddress: PropTypes.string.isRequired,
    validEmail: PropTypes.string.isRequired,
    validPhone: PropTypes.string.isRequired,
    registerName: PropTypes.func.isRequired,
    registerCMND: PropTypes.func.isRequired,
    registerUsername: PropTypes.func.isRequired,
    registerPassword: PropTypes.func.isRequired,
    registerAddress: PropTypes.func.isRequired,
    registerEmail: PropTypes.func.isRequired,
    registerPhone: PropTypes.func.isRequired,
    registerValid: PropTypes.func.isRequired,
}
const mapStateToProps = state => {
    return {
        name: state.reducerRegister.name,
        cmnd: state.reducerRegister.cmnd,
        username: state.reducerRegister.username,
        password: state.reducerRegister.password,
        address: state.reducerRegister.address,
        email: state.reducerRegister.email,
        phone: state.reducerRegister.phone,
        validName: state.reducerRegister.validName,
        validCmnd: state.reducerRegister.validCmnd,
        validUsername: state.reducerRegister.validUsername,
        validPassword: state.reducerRegister.validPassword,
        validAddress: state.reducerRegister.validAddress,
        validEmail: state.reducerRegister.validEmail,
        validPhone: state.reducerRegister.validPhone,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        registerName: name => {
            dispatch(actions.registerName(name));
        },
        registerCMND: cmnd => {
            dispatch(actions.registerCMND(cmnd));
        },
        registerUsername: username => {
            dispatch(actions.registerUsername(username));
        },
        registerPassword: password => {
            dispatch(actions.registerPassword(password));
        },
        registerAddress: address => {
            dispatch(actions.registerAddress(address));
        },
        registerEmail: email => {
            dispatch(actions.registerEmail(email));
        },
        registerPhone: phone => {
            dispatch(actions.registerPhone(phone));
        },
        registerValid: (validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone) => {
            dispatch(actions.registerValid(validName, validCmnd, validUsername, validPassword, validAddress, validEmail, validPhone))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);