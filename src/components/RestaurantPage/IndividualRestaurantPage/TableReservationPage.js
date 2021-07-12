import React from "react";
import {
    ImageBackground,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import {DateFilter} from "./DateItem";
import {TimesItem} from "./TimesItem";
import {ReserveForm} from "./ReserveForm";
import {Header} from "../../Include/Header";
import {LayoutTable} from "./LayoutTable";

export const TableReservationPage = (props) => {
    let tableNumber = props.route.params ? Number(props.route.params.split(' ')[1]): 6;
    const [count, setCount] = React.useState(tableNumber)
    return (
        <ImageBackground source={require('../../../../assets/images/pageBackground.png')} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
            <View>
            <Header title={props.route.params }{...props}/>
            </View>
            <ScrollView contentContainerStyle={{paddingVertical: 1}}>
        <View style={styles.container}>
            <View style={styles.floorPlan}>
                    <LayoutTable {...props}/>
            </View>
            <View style={styles.resDate}>
                <Text style={styles.text}>Data of reservation</Text>
                   <DateFilter {...props}/>
            </View>
            <View style={styles.numGuest}>
                <Text style={styles.text}>Number of Guests</Text>
                <View style={{flexDirection: 'row', paddingVertical: 10}}>
                    <Pressable style={[styles.button, styles.btnLeft]}
                               onPress={() => setCount(((count - 1 === 0 ? count : count - 1)))}>
                        <Text style={styles.text}>-</Text>
                    </Pressable>
                    <Text style={styles.textInput}>{count}</Text>
                    <Pressable style={[styles.button, styles.btnRight]} onPress={() => setCount(count + 1)}>
                        <Text style={styles.text}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.availableTimes}>
                <Text style={styles.text}>Available times</Text>
                <TimesItem {...props}/>
            </View>
            <View style={styles.reserveForm}>
                 <ReserveForm {...props}/>
            </View>
        </View>
            </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20
    },

    floorPlan: {
        backgroundColor: '#fff',
        height: 250,
        width: '100%',
        padding: 4,
        borderRadius:15,
        borderWidth:1
    },
    button: {
        width:50,
        height:45,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        backgroundColor: '#e5e5e5',
    },
    btnRight:{
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
    },
    btnLeft:{
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: '600',
        letterSpacing: 0.25,
    },
    textInput:{
        fontSize: 20,
        backgroundColor:'#f6f6f6',
        width: 50,
        height: 45,
        paddingVertical:4,
       textAlign:'center',
        elevation: 3,

    },
    resDate: {
        paddingVertical:20,

    },
    numGuest: {
        paddingVertical:10,
        flexDirection: 'column'
    },
    availableTimes: {
        paddingVertical:10,
    },
    reserveForm: {
        paddingVertical:10,
       alignItems: 'center',
        justifyContent: 'center'

    }
})