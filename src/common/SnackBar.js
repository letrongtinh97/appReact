import React, { Component } from "react";
import { StyleSheet, Text, Animated } from "react-native";


class SnackBar extends Component {
    constructor() {
        super();

        this.animatedValue = new Animated.Value(50);
        this.ShowSnackBar = false;
        this.HideSnackBar = true;
        this.state = {
            SnackBarInsideMsgHolder: ''
        };
    }

    ShowSnackBarFunction(message, duration = 0) {
        if (this.ShowSnackBar === false) {
            this.setState({ SnackBarInsideMsgHolder: message });

            this.ShowSnackBar = true;

            Animated.timing(
                this.animatedValue,
                {
                    toValue: 0,
                    duration: 100
                }
            ).start(this.hide(duration));
        }
    }

    hide = () => {
        this.timerID = setTimeout(() => {
            if (this.HideSnackBar === true) {
                this.HideSnackBar = false;

                Animated.timing(
                    this.animatedValue,
                    {
                        toValue: 50,
                        duration: 400
                    }
                ).start(() => {
                    this.HideSnackBar = true;
                    this.ShowSnackBar = false;
                    clearTimeout(this.timerID);
                })
            }
        }, 10000);
    }

    SnackBarCloseFunction = () => {
        if (this.HideSnackBar === true) {
            this.HideSnackBar = false;
            clearTimeout(this.timerID);

            Animated.timing(
                this.animatedValue,
                {
                    toValue: 50,
                    duration: 400
                }
            ).start(() => {
                this.ShowSnackBar = false;
                this.HideSnackBar = true;
            });
        }
    }

    render() {
        return (

            <Animated.View style={[{ transform: [{ translateY: this.animatedValue }] }, styles.SnackBarContainter]}>

                <Text numberOfLines={1} style={styles.SnackBarMessage}>{this.state.SnackBarInsideMsgHolder}</Text>

                <Text style={styles.SnackBarUndoText} onPress={this.SnackBarCloseFunction} > OK </Text>

            </Animated.View>

        );
    }
}

export default SnackBar;


const styles = StyleSheet.create({

    SnackBarContainter:
    {
        position: 'absolute',
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        left: 0,
        bottom: 0,
        right: 0,
        height: 50,
        paddingLeft: 15,
        paddingRight: 55
    },

    SnackBarMessage:
    {
        color: '#fff',
        fontSize: 16
    },

    SnackBarUndoText: {
        color: 'white',
        fontSize: 16,
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        padding: 5

    }
});