import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import Video from 'react-native-video';

const vid = '../assets/test.mp4'

export default class ShowVideo extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            repeat: false,
            rate: 1,
            volume: 100,
            muted: false,
            resizeMode: 'stretch',
            duration: 0.0,
            currentTime: 0.0,
            paused: false,
            rateText: '1.0',
            pausedText: 'Play',
            hideControls: false
        }
    }

    onEnd = () => {
        const { navigation } = this.props
        navigation.navigate('AuthLoading');

    }

    // Render any loading content that you like here
    render() {
        const { rate, volume, resizeMode, muted } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <StatusBar barStyle="default" />
                <Video
                    source={require(vid)}
                    ref={ref => this.videoRef = ref}
                    rate={rate}
                    volume={volume}
                    muted={muted}
                    resizeMode={resizeMode}
                    onEnd={this.onEnd}
                    onBuffer={this.onBuffer}
                    onError={this.videoError}
                    style={styles.backgroundVideo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // transform: [{ rotate: '90deg' }]
    },
});

ShowVideo.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.func,
        PropTypes.bool,
        PropTypes.object,
    ]))
}