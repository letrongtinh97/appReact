import React from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";

export default class FloatingInput extends React.Component {
    state = {
        isFocused: false
    };

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    render() {
        const { isBlur, mess, label, ...props } = this.props;
        const { isFocused } = this.state;
        const labelStyle = {
            position: "absolute",
            left: 0,
            top: !isFocused ? 18 : 0,
            fontSize: !isFocused ? 18 : 14,
            color: "yellow"
        };
        return (
            <View style={{ paddingTop: 18 }}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    {...props}
                    style={{
                        height: 50,
                        fontSize: 16,
                        color: "white",
                        borderBottomWidth: 1,
                        borderBottomColor: "white"
                    }}
                    onFocus={this.handleFocus}
                    onBlur={!isBlur ? this.handleBlur : null}
                />
                {/* {
                    isValid ? <Text style={{ color: 'red', fontSize: 14, textAlign: 'right', fontWeight: 'bold' }}>{mess}</Text> :
                        null
                } */}
                <Text style={{ color: 'rgb(240,70,2)', fontSize: 14, textAlign: 'right', fontWeight: 'bold' }}>{mess}</Text>
            </View>
        );
    }
}
FloatingInput.propTypes = {
    label: PropTypes.string.isRequired,
    isBlur: PropTypes.bool.isRequired,
    mess: PropTypes.string.isRequired,
    // isValid: PropTypes.bool.isRequired,
};
