import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../components/screens/AuthScreen'
import LoginScreen from '../components/screens/login/LoginScreen'
import SignUpScreen from '../components/screens/signup/SignUpScreen'
import ChangedPassScreen from '../components/screens/signup/ChangePassScreen'
import TabContainer from './TabContainer'
import { createStackNavigator } from 'react-navigation-stack';
import VidComp from '../common/showVideo'

const SingInStack = createStackNavigator(
    {
        SignIn: LoginScreen,
        SignUp: SignUpScreen,
        Reset: ChangedPassScreen
    },
    {
        initialRouteName: 'SignIn',
        headerMode: 'none',
    }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: TabContainer,
            SignIn: SingInStack,
            Vid: VidComp
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);