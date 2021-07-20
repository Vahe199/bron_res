import React, {useState} from 'react';
import {View, Platform, Text, StyleSheet, Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import calendar from "../../../../assets/images/calendar.png"
import {Divider} from "react-native-elements";
import {TouchableOpacity} from "react-native-gesture-handler";

export const DateFilter = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('');
    const [show, setShow] = useState(false);
    const [time, setTime] = useState(new Date());

    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
       if(mode === 'datetime'){
           console.log(selectedValue,mode,889)
           setTime(selectedValue);
           setDate(selectedValue);
       } else if (mode == 'date') {
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
        console.log(Platform)
        if(Platform.OS == "android"){
            showMode('date');
            console.log(Platform)
        }else {
            showMode('datetime');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showDatepicker} style={styles.pickedDateContainer} activeOpacity={0.7}>
                <Text style={styles.pickedDate}>{date.getDate()}/{date.getMonth() +1}/{date.getFullYear()}</Text>
                <Divider orientation="vertical" width={1} style={styles.divider} />
                <Text style={styles.pickedDate}>{time.getHours()}:{time.getMinutes()}</Text>
                <Divider orientation="vertical" width={1} style={styles.divider} />
                <Image source={calendar} style={{width:35,height:29}}/>
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
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop:10
    },
    pickedDateContainer: {
        flexDirection:'row',
       paddingVertical:12,
        paddingHorizontal:20,
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

    },
    pickedDate: {
        fontSize: 20,
        color: 'black',
    },
    divider:{
        marginLeft: 10,
        marginRight:10
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