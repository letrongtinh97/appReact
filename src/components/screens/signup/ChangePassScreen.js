import React from "react";
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground
} from "react-native";
import FloatingInput from "../../../common/FloatingInput";
import PropTypes from "prop-types";
import Header from '../../../common/HeaderApp'

const imgBackground = "../../../assets/background.png";
const logo = "../../../assets/logo.png";

export default class ChangePassScreen extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPass: ''
        }
    }

    handleReset = () => {
        const { navigation } = this.props
        const { password, confirmPass } = this.state
        if (password === confirmPass) {
            alert('Success');
            navigation.goBack()
        }
        else {
            alert('Failed')
        }

    }

    render() {
        const { username, password, confirmPass } = this.state
        const { navigation } = this.props
        return (
            <ImageBackground style={{ flex: 1, justifyContent: 'space-between' }} source={require(imgBackground)}>
                <StatusBar barStyle="dark-content" />
                <Header headerName='Reset Pass' isBack={true} navigation={navigation} />
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require(logo)}
                        style={{
                            width: 200,
                            height: 200
                        }} />
                </View>

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
                        onChangeText={text => this.setState({ username: text })}
                        isBlur={username === "" ? false : true}
                        keyboardType={'numeric'}
                        mess=''
                    // isValid={false}
                    />
                    <FloatingInput
                        label="Password"
                        value={password}
                        onChangeText={text => this.setState({ password: text })}
                        secureTextEntry={true}
                        isBlur={password === "" ? false : true}
                        keyboardType={'numeric'}
                        mess=''
                    // isValid={false}
                    />
                    <FloatingInput
                        label="Confirm Password"
                        value={confirmPass}
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ confirmPass: text })}
                        isBlur={confirmPass === "" ? false : true}
                        keyboardType={'numeric'}
                        mess=''
                    // isValid={false}
                    />
                </View>
                <TouchableOpacity onPress={this.handleReset} style={{ margin: 20, padding: 10, alignItems: 'center', backgroundColor: 'rgb(233, 120, 60)', marginTop: 20, borderRadius: 100 }}><Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Change Password</Text></TouchableOpacity>
            </ImageBackground>
        );
    }
}
ChangePassScreen.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.func,
            PropTypes.bool,
            PropTypes.object
        ])
    )
}