import React from 'react';
import Icon from '../common/icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CourseScreen from '../components/screens/course/CourseScreen'
import CourseDetail from '../components/screens/course/Detail/CourseDetail'
import AllCourse from '../components/screens/course/All/AllCourse'
import CalendarScreen from '../components/screens/home/HomeScreen'
import SettingsScreen from '../components/screens/setting/SettingScreen'
import { createStackNavigator } from 'react-navigation-stack';

const CourseStack = createStackNavigator(
    {
        CourseScreen,
        CourseDetail,
        AllCourse
    },
    {
        initialRouteName: 'CourseScreen',
        headerMode: 'none',
    }
);

export default createBottomTabNavigator(
    {
        Course: CourseStack,
        Calendar: CalendarScreen,
        Profile: SettingsScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent;
                let iconName;
                if (routeName === 'Course') {
                    IconComponent = Icon.Ionicons;
                    iconName = `ios-book`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                } else if (routeName === 'Profile') {
                    IconComponent = Icon.AntDesign;
                    iconName = `profile`;
                } else if (routeName === 'Calendar') {
                    IconComponent = Icon.Ionicons;
                    iconName = `ios-calendar`;
                }
                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'tomato',
            activeBackgroundColor: 'rgba(95, 158, 102, 0.8)'
        },
    }
);

