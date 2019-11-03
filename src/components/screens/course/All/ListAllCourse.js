import React from "react";
import {
    View,
    // StatusBar,
    TouchableOpacity,
    // ImageBackground,
    Text,
    StyleSheet,
    Image
} from "react-native";
// import FloatingInput from "../../../common/FloatingInput";
// import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from "prop-types";
import { colors, fonts } from '../../../styles';
// import Snackbar from '../../../common/SnackBar'
// import { API, customFetch } from '../../../networking/services'
// import Header from '../../../common/HeaderApp'

const styles = StyleSheet.create({
    itemThreeContainer: {
        backgroundColor: 'rgba(52,52,52,0.8)',
    },
    itemThreeSubContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    itemThreeImage: {
        height: 100,
        width: 100,
    },
    itemThreeContent: {
        flex: 1,
        paddingLeft: 15,
        justifyContent: 'space-between',
    },
    itemThreeBrand: {
        fontFamily: fonts.primaryRegular,
        fontSize: 14,
        color: '#e9781a',
    },
    itemThreeTitle: {
        fontFamily: fonts.primaryBold,
        fontSize: 16,
        color: 'white',
    },
    itemThreeSubtitle: {
        fontFamily: fonts.primaryRegular,
        fontSize: 12,
        color: 'white',
    },
    itemThreeMetaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemThreePrice: {
        fontFamily: fonts.primaryRegular,
        fontSize: 15,
        color: 'white',
        textAlign: 'right',
    },
    itemThreeHr: {
        flex: 1,
        height: 1,
        backgroundColor: '#e3e3e3',
        marginRight: -15,
    },
    badge: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default class ListAllCourse extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    moveToDetail = () => {
        const { navigation, item } = this.props
        navigation.navigate('CourseDetail', {
            item
        })
    }

    render() {
        const { item } = this.props
        return (
            // <View style={{ flex: 1 }}>
            //     {/* <Header headerName='CourseDetail' isBack={true} navigation={navigation} /> */}
            //     {/* <Text>CourseDetail</Text> */}
            // </View>

            <TouchableOpacity
                // key={item.id + ''}
                style={styles.itemThreeContainer}
                onPress={this.moveToDetail}
            >
                <View style={styles.itemThreeSubContainer}>
                    <Image source={{ uri: item.image }} style={styles.itemThreeImage} />
                    <View style={styles.itemThreeContent}>
                        <Text style={styles.itemThreeBrand}>{item.brand}</Text>
                        <View>
                            <Text style={styles.itemThreeTitle}>{item.title}</Text>
                            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
                                {item.subtitle}
                            </Text>
                        </View>
                        <View style={styles.itemThreeMetaContainer}>
                            {item.badge && (
                                <View
                                    style={[
                                        styles.badge,
                                        item.badge === 'NEW' && { backgroundColor: colors.green },
                                    ]}
                                >
                                    <Text
                                        style={{ fontSize: 10, color: colors.white }}
                                        styleName="bright"
                                    >
                                        {item.badge}
                                    </Text>
                                </View>
                            )}
                            <Text style={styles.itemThreePrice}>{item.price}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemThreeHr} />
            </TouchableOpacity>
        );
    }
}
ListAllCourse.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.func,
            PropTypes.bool,
            PropTypes.object
        ])
    ),
    item: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
            PropTypes.bool,
        ])
    )
};
