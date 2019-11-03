import React, { Component } from 'react'
import {
    View,
    ScrollView,
} from 'react-native'
import Header from '../../../common/HeaderApp'
import PropTypes from "prop-types";
import CourseSwiper from './CourseSwiper'

const styles = {
    container: {
        flex: 1
    }
}

export default class CourseScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Header headerName='Course' />
                <ScrollView>
                    <CourseSwiper titleCourse='Mới nhất' navigation={navigation} />
                    <CourseSwiper titleCourse='Hot nhất' navigation={navigation} />
                    <CourseSwiper titleCourse='Bạn từng xem' navigation={navigation} />
                </ScrollView>
            </View>
        )
    }
}
CourseScreen.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.func,
            PropTypes.bool,
            PropTypes.object
        ])
    )
};
