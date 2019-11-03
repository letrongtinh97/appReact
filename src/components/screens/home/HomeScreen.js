import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import moment from 'moment'

export default class AgendaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            now: moment().format('YYYY-MM-DD'),
            items: {}
        };
    }

    render() {
        const { items, now } = this.state
        return (
            <Agenda
                items={items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={now}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                // disablePan
                hideKnob
            // markingType={'period'}
            // markedDates={{
            //    '2017-05-08': {textColor: '#666'},
            //    '2017-05-09': {textColor: '#666'},
            //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
            //    '2017-05-21': {startingDay: true, color: 'blue'},
            //    '2017-05-22': {endingDay: true, color: 'gray'},
            //    '2017-05-24': {startingDay: true, color: 'gray'},
            //    '2017-05-25': {color: 'gray'},
            //    '2017-05-26': {endingDay: true, color: 'gray'}}}
            // monthFormat={'yyyy'}
            // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
            //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
            />
        );
    }

    loadItems(day) {
        // let timestamp = moment().valueOf()
        const start = 1 - parseInt(moment().format('DD'))
        const num = parseInt(moment().daysInMonth())
        const end = num - parseInt(moment().format('DD'))
        const { items } = this.state
        setTimeout(() => {
            for (let i = start; i <= end; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    items[strTime].push({
                        // title: moment(strTime).toISOString().split('T')[0],
                        data: [{
                            hour: '12pm',
                            title: 'Hello'
                        }]
                    })
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => { newItems[key] = items[key]; });
            this.setState({
                items: newItems
            });
        }, 1000);
    }

    renderItem(item) {
        return (
            <View style={[styles.item, { height: item.height }]}><Text>{item.name}</Text></View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1 !== r2;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});