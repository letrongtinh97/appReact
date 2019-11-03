import React from "react";
import PropTypes from "prop-types";
import { Header, Title, Left, Body, Icon, Button } from 'native-base';

export default class HeaderApp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { headerName, isBack, navigation } = this.props
        return (
            <Header style={{ backgroundColor: 'rgba(95, 158, 102, 0.8)' }}>
                {
                    isBack ?
                        (<Left>

                            <Button transparent onPress={() => navigation.goBack()}>
                                <Icon name='ios-arrow-back' />
                            </Button>
                        </Left>) : null
                }
                <Body style={{ alignItems: isBack ? "flex-start" : 'center' }}>
                    <Title style={{ fontFamily: 'sans-serif-medium', fontWeight: 'bold' }}>{headerName}</Title>
                </Body>
            </Header>
        );
    }
}

HeaderApp.defaultProp = {
    isBack: false
}

HeaderApp.propTypes = {
    navigation: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.func,
            PropTypes.bool,
            PropTypes.object
        ])
    ),
    headerName: PropTypes.string.isRequired,
    isBack: PropTypes.bool
};