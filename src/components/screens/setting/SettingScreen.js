import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from "prop-types";
import Header from '../../../common/HeaderApp'
import { Card, CardItem, Text, Thumbnail } from 'native-base';
import Icon from '../../../common/icons'
import Snackbar from '../../../common/SnackBar'
import * as actions from '../../../redux/actions'
import { connect } from 'react-redux';

const img = '../../../assets/avatar1.jpg'

class SettingScreen extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     email: '',
        //     phone: '',
        //     cmnd: '',
        //     address: '',
        //     username: '',
        //     name: '',
        //     birthday: ''
        // }
    }

    // componentDidMount = async () => {
    //     const { profile } = this.props
    //     const data = JSON.parse(await AsyncStorage.getItem('profile'));
    //     const { user_phone, user_mail, user_cmnd, user_address, user_name } = data
    //     this.setState({
    //         email: user_mail,
    //         address: user_address,
    //         cmnd: user_cmnd,
    //         phone: user_phone,
    //         name: user_name
    //     })

    // }

    _signOut = async () => {
        const { navigation, setUsername, setValid, setPassword } = this.props
        await AsyncStorage.clear();
        setUsername('')
        setPassword('')
        setValid('', '')
        navigation.navigate('SignIn')
    }

    render() {
        const { profile } = this.props
        const { user_phone, user_mail, user_cmnd, user_address, user_name } = profile
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <Header headerName='Profile' />
                <View style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center', backgroundColor: '#e9781a' }}>
                        <Thumbnail
                            source={require(img)}
                            style={{ width: 130, height: 130, borderRadius: 130 / 2, marginRight: 5 }}
                        />
                        <View>
                            <Text style={{ fontFamily: 'sans-serif-medium', fontWeight: '600', fontSize: 22, color: '#FFFFFF' }}>{user_name}</Text>
                        </View>
                    </View>

                    <Card style={{ flex: 1, alignItems: 'center', justifyContent: 'center', shadowColor: 'black', backgroundColor: 'rgba(43, 113, 166, 0.8)' }}>
                        {/* <CardItem header>
                            <Text style={{ fontFamily: 'ans-serif-medium', fontWeight: 'bold', fontSize: 16 }}>Information</Text>
                            <Icon.Ionicons name='ios-information-circle-outline' style={{ fontSize: 30 }} />
                        </CardItem> */}
                        <CardItem style={{ backgroundColor: 'none' }} >
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Icon.FontAwesome name='phone' style={{ fontSize: 20, marginRight: 10, color: 'white' }} />
                                <Text style={{ fontSize: 15, marginRight: 5, color: 'white' }}>{user_phone}</Text>
                            </View>
                        </CardItem>
                        <CardItem style={{ backgroundColor: 'none' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Icon.MaterialIcons name='email' style={{ fontSize: 20, marginRight: 10, color: 'white' }} />
                                <Text style={{ fontSize: 15, marginRight: 5, color: 'white' }}>{user_mail}</Text>
                            </View>
                        </CardItem>
                        <CardItem style={{ backgroundColor: 'none' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Icon.AntDesign name='idcard' style={{ fontSize: 20, marginRight: 10, color: 'white' }} />
                                <Text style={{ fontSize: 15, marginRight: 5, color: 'white' }}>{user_cmnd}</Text>
                            </View>
                        </CardItem>
                        <CardItem style={{ backgroundColor: 'none' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Icon.FontAwesome5 name='address-book' style={{ fontSize: 20, marginRight: 10, color: 'white' }} />
                                <Text style={{ fontSize: 15, marginRight: 5, color: 'white' }}>{user_address}</Text>
                            </View>
                        </CardItem>
                        <CardItem style={{ backgroundColor: 'none' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Icon.FontAwesome5 name='birthday-cake' style={{ fontSize: 20, marginRight: 10, color: 'white' }} />
                                <Text style={{ fontSize: 15, marginRight: 5, color: 'white' }}></Text>
                            </View>
                        </CardItem>
                    </Card>
                    <Card style={{ shadowColor: 'black', backgroundColor: 'rgba(57, 96, 125, 0.8)', borderRadius: 50 }}>
                        <CardItem style={{ backgroundColor: 'none' }}>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}
                                onPress={this._signOut}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                    <Icon.AntDesign name='logout' style={{ fontSize: 20, marginRight: 10, color: 'white' }} />
                                    <Text style={{ color: 'white' }}>
                                        Log Out
                                </Text>
                                </View>
                                <Icon.Ionicons name='ios-arrow-forward' style={{ fontSize: 20, color: 'white' }} />
                            </TouchableOpacity>
                        </CardItem>
                    </Card>
                    <Snackbar
                        ref={(ref) => {
                            this.snack = ref
                        }}
                    />
                </View>
            </View>
        );
    }
}
SettingScreen.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.func,
            PropTypes.bool,
            PropTypes.object
        ])
    ),
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setValid: PropTypes.func.isRequired,
    profile: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.bool,
            PropTypes.object
        ])
    )
};
const mapStateToProps = state => {
    return {
        profile: state.reducerLogin.profile
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);