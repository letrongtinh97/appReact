import React from "react";
import {
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import { Card } from 'native-base'
import PropTypes from "prop-types";
import Icon from '../../../common/icons'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height / 3

const img = '../../../assets/'

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    wrapper: {

    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        flex: 1
    }
}

export default class CourseSwiper extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    moveToDetail = () => {
        const { navigation } = this.props
        navigation.navigate('CourseDetail')
    }

    moveToAll = () => {
        const { navigation } = this.props
        navigation.navigate('AllCourse')
    }

    // renderItem = (slide) => {
    //     const arr = []
    //     for (let i = 1; i <= slide; i++) {
    //         console.log(img + i + `.jpg`)
    //         const url = img + `1.jpg`
    //         arr.push(
    //             <TouchableOpacity style={styles.slide} onPress={this.moveToDetail} key={i + ''}>
    //                 <Image resizeMode='stretch' style={styles.image} source={require(url)} />
    //             </TouchableOpacity>
    //         )
    //     }
    //     return arr
    // }

    render() {
        const { titleCourse } = this.props
        // const component = this.renderItem(4)
        // const items = []
        // for (const [index, value] of elements.entries()) {
        //     items.push(<li key={index}>{value}</li>)
        // }
        return (
            <Card style={{ backgroundColor: 'rgba(233, 120, 60, 0.8)' }}>
                <View header style={{ padding: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'sans-serif-medium', fontSize: 18, color: 'white' }}>{titleCourse}</Text>
                    <TouchableOpacity onPress={this.moveToAll} style={{ justifyContent: 'center' }}>
                        <Icon.Ionicons name='ios-more' style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Swiper style={styles.wrapper} height={height}
                        // onMomentumScrollEnd={(state) => console.log('index:', state.index)}
                        dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                        activeDot={<View style={{ backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                        paginationStyle={{
                            bottom: 0, left: null, right: 10
                        }} loop>
                        <TouchableOpacity style={styles.slide} onPress={this.moveToDetail}>
                            <Image resizeMode='stretch' style={styles.image} source={require(img + `1.jpg`)} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slide} onPress={this.moveToDetail}>
                            <Image resizeMode='stretch' style={styles.image} source={require(img + `2.jpg`)} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slide} onPress={this.moveToDetail}>
                            <Image resizeMode='stretch' style={styles.image} source={require(img + `3.jpg`)} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.slide} onPress={this.moveToDetail}>
                            <Image resizeMode='stretch' style={styles.image} source={require(img + `4.jpg`)} />
                        </TouchableOpacity>
                        {/* {component} */}
                    </Swiper>
                </View>
            </Card>
        );
    }
}
CourseSwiper.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.func,
            PropTypes.bool,
            PropTypes.object
        ])
    ),
    titleCourse: PropTypes.string.isRequired,
};
