// import React from "react";
// import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
// import {useDispatch, useSelector} from "react-redux";
// import {getRestaurantsData} from "../../../redux/action/restaurant-action";
//
// export const DateFilter = (props) => {
//     const dispatch = useDispatch()
//     const  category= [
//         {id:1,name:'Thu, 27 May'},
//         {id:2,name:'Fri, 28 May'},
//         {id:3,name:'Sat, 29 May'},
//         {id:4,name:'Sun, 30 May'},
//         {id:5,name:'Mon, 31 May'},
//         {id:6,name:'Tue, 1 June'},
//         {id:7,name:'Wed, 2 June'},
//     ]
//     const getCategoryHandler = async (category) => {
//         // if (props.route.name === "Category") {
//         //  //   await dispatch(getRestaurantsData(category))
//         // } else {
//         //     //  await dispatch(getRestaurantsData(category))
//         //   //  props.navigation.push('Category', category)
//         // }
//     }
//     return (
//         <View>
//             <View style={styles.view}>
//
//                 <FlatList horizontal
//                           pagingEnabled={true}
//                           showsHorizontalScrollIndicator={false}
//                           legacyImplementation={false}
//                           data={category} keyExtractor={(item, index) => index.toString()}
//                           renderItem={({item}) => (
//                               <TouchableOpacity activeOpacity={0.5} key={item.id}
//                                                 onPress={() => getCategoryHandler(item.name)}
//                                                 style={styles.FilterBtn}>
//                                   <Text style={styles.textBtn}>{item.name}</Text>
//                               </TouchableOpacity>
//                           )}/>
//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     view: {
//         flexDirection: 'row',
//     },
//     FilterBtn: {
//         marginRight: 10,
//         marginTop: 10,
//         marginBottom: 5,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 10,
//         paddingHorizontal: 10,
//         borderRadius: 7,
//         elevation: 3,
//         backgroundColor: '#fff',
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.23,
//         shadowRadius: 2.62,
//
//     },
//     textBtn: {
//         fontSize: 16,
//         lineHeight: 21,
//         fontWeight: "600",
//         color: '#000',
//     },
//     text: {
//         fontSize: 24,
//         fontWeight: "600",
//         marginBottom: 10
//     }
// })


import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Platform, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
export const DateFilter= () => {
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(moment().format('LLL')));

    const showPicker = () => {
        setIsPickerShow(true);
    };
let newDate = new Date()
    const onChange = (event, value) => {
        setDate(value?value:newDate);
        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* Display the selected date */}
            <TouchableOpacity onPress={showPicker} style={styles.pickedDateContainer}>
                <Text style={styles.pickedDate}>{date.toString()}</Text>
                <AntDesign name="calendar" size={24} color="#0d6efd" />
            </TouchableOpacity>

            {/* The date picker */}
            {isPickerShow && (
                <DateTimePicker
                    value={date}
                    locale={"ru-RU"}
                    mode={'datetime'}
                    display={'spinner'}
                    is24Hour={true}
                    onChange={onChange}
                    style={styles.datePicker}
                />
            )}
        </View>
    );
};

// just add some styles to make our app look more beautiful
// This is not the focus of this article
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        // padding: 50,
    },
    pickedDateContainer: {
        flexDirection:'row',
        padding: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
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