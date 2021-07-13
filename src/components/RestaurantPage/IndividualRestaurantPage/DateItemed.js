import React, {useState} from 'react';
import {View, Platform, TouchableOpacity, Text, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {AntDesign} from "@expo/vector-icons";
import moment from "moment";
export const DateFilter = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [time, setTime] = useState(new Date());

    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
        if (mode == 'date') {
            const currentDate = selectedValue || new Date();
            setDate(currentDate);
            setMode('time');
            setShow(Platform.OS !== 'ios'); // to show the picker again in time mode
        } else {
            const selectedTime = selectedValue || new Date();
            setTime(selectedTime);
            setShow(Platform.OS === 'ios');
            setMode('date');
        }
    };
    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    const formatDate = (date, time) => {
        console.log(date, time)
        return `${date.getDate()}/${date.getMonth() +
        1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showDatepicker} style={styles.pickedDateContainer}>
                <Text style={styles.pickedDate}>{formatDate(date, time)}</Text>
                <AntDesign name="calendar" size={24} color="#0d6efd" />
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                   // timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display={'spinner'}
                    onChange={onChange}
                    style={styles.datePicker}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginHorizontal:10,
        marginTop:10
        // padding: 50,
    },
    pickedDateContainer: {
        flexDirection:'row',
        padding: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
        elevation:5
    },
    pickedDate: {
        marginRight:15,
        fontSize: 16,
        color: 'black',
    },
    // This only works on iOS
    datePicker: {
        width: 270,
        height: 160,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
});