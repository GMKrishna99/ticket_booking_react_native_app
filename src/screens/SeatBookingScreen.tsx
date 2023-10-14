/* eslint-disable eqeqeq */
/* eslint-disable react/self-closing-comp */

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';



const timeArray: string[] = [
    '07:30 Am',
    '11:00 Am',
    '02:30 Pm',
    '06:30 Pm',
    '10:00 Pm',
];

const generateDate = (): string[] => {
    const date = new Date();
    let weekday = ['sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let weekdays = [];
    for (let i = 0; i < 7; i++) {
        let tempDate = {
            date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
            day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
        };
        weekdays.push(tempDate);
    }
    return weekdays;
};

const generateSeats = () => {
    let numRow = 8;
    let numCol = 3;

    let rowArray = [];
    let start = 1;
    let reachnine = false;

    for (let i = 0; i < numRow; i++) {
        let columArray = [];
        for (let j = 0; j < numCol; j++) {
            let seatObject = {
                number: start,
                taken: Boolean(Math.round(Math.random())),
                selected: false,
            };
            columArray.push(seatObject);
            start++;
        }
        if (i == 3) {
            numCol += 2;
        }
        if (numCol < 9 && !reachnine) {
            numCol += 2;
        } else {
            reachnine = true;
            numCol -= 2;
        }
        rowArray.push(columArray);
    }
    return rowArray;
};
const SeatBookingScreen = () => {

    const [dateArray, setDateArray] = useState<string[]>(generateDate());
    const [selectedDateIndex, setSelectedDateIndex] = useState<any>();
    const [price, setPrice] = useState<number>(0);

    const [twoDSeatArray, setTwoDSeatArray] = useState<any[][]>(generateSeats());
    const [selectedSeatArray, setSelectedSeatArray] = useState([]);
    const [selectedTimeIndex, setSelectedTimeIndex] = useState<any>();

    return (
        <View style={styles.container}>

        </View>
    );
};

export default SeatBookingScreen;

const styles = StyleSheet.create({
    container: {},
});
