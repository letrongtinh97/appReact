import React from "react";
import {
    View,
    // StatusBar,
    TouchableOpacity,
    // ImageBackground,
    Text,
    Image
    // Image
} from "react-native";
// import FloatingInput from "../../../common/FloatingInput";
// import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from "prop-types";
// import Snackbar from '../../../common/SnackBar'
// import { API, customFetch } from '../../../networking/services'
import Header from '../../../../common/HeaderApp'

export default class CourseDetail extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props
        const item = navigation.getParam('item', 'NO-ITEM')
        return (
            <View style={{ flex: 1 }}>
                <Header headerName='CourseDetail' isBack={true} navigation={navigation} />
                <View style={{ flex: 0.5 }}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'Lato-SemiboldItalic', color: '#6271da' }}>
                            {item.brand}
                        </Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Lato-Bold' }}>
                            {item.title}
                        </Text>
                    </View>
                    <Image
                        source={{ uri: item.image }}
                        style={{ flex: 1 }}
                    />
                </View>
                <View style={{ flex: 0.5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: '#e9781a', borderRadius: 10, width: '70%' }} onPress={() => alert('hello')}>
                            <Text style={{ fontSize: 16, fontFamily: 'LatoSemibold', textAlign: 'center', color: 'white' }}>
                                Enroll
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontFamily: 'Lato-Medium' }}>
                            {item.price}
                        </Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 18, fontFamily: 'LatoSemibold' }}>
                            Description
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
CourseDetail.propTypes = {
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
