import React from "react";
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from "react-native";
import {ReserveForm} from "./utilComponents/ReserveForm";
import {Header} from "../../Include/Header";
import {LayoutTable} from "./utilComponents/LayoutTable";
import {DateFilter} from "./utilComponents/DateItem";


export const TableReservationPage = (props) => {
    console.log(props.route.params)
    const [count, setCount] = React.useState(4)
    return (
        <ImageBackground source={require('../../../../assets/images/pageBackground.png')} style={{flex: 1}}>
            <View>
                <Header title={props.route.params }{...props}/>
            </View>
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{paddingVertical: 1}}>
        <View style={styles.container}>
            <View style={styles.floorPlan}>
                    <LayoutTable {...props}/>
            </View>
            <View style={styles.resDate}>
                <Text style={styles.text}>Дата и время бронирования</Text>
                   <DateFilter {...props}/>
            </View>
            <View style={styles.numGuest}>
                <Text style={styles.text}>Количество гостей</Text>
                <View style={{flexDirection: 'row', paddingVertical: 10}}>
                    <TouchableOpacity style={[styles.button, styles.btnLeft]} activeOpacity={0.7}
                               onPress={() => setCount(((count - 1 === 0 ? count : count - 1)))}>
                        <Text style={{fontSize:26}}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.textInput}>{count}</Text>
                    <TouchableOpacity style={[styles.button, styles.btnRight]} activeOpacity={0.7}
                                      onPress={() => setCount(count + 1)}>
                        <Text style={{fontSize:22}}>+</Text>
                    </TouchableOpacity>
                </View>
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
         padding: 2,
         borderRadius:5,
         borderWidth:0.2
    },
    button: {
        width:50,
        height:45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e5e5e5',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
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
        marginLeft:8,
        fontSize: 20,
        lineHeight: 21,
        fontWeight: '600',
        letterSpacing: 0.25,
    },
    textInput:{
        height:45,
        fontSize: 20,
        backgroundColor:'#f6f6f6',
       marginHorizontal:1,
         paddingVertical:9,
        paddingHorizontal:18,
       textAlign:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

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