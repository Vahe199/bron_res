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
import {DateFilter} from "./utilComponents/DateItem";
import {TableItem} from "./utilComponents/TableItem";
import {useSelector} from "react-redux";


export const TableReservationPage = (props) => {
    const {room} = useSelector(state => state.individualPage);
    const [count, setCount] = React.useState(4)
    const [date, setDate] = React.useState('')
    const {resTableId} = useSelector(state => state.reservation)
    return (
        <ImageBackground source={require('../../../../assets/images/pageBackground.png')} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
            <ScrollView contentContainerStyle={{paddingVertical: 1}}>
        <View style={styles.container}>
            <View>

                    <TableItem {...props} setTableId={setTableId} tableId={tableId} data={room.data} table_x={room.table_x} table_y={room.table_y} background_img={room.background_img}/>
            </View>
            <View style={styles.resDate}>
                <Text style={styles.text}>Дата и время бронирования</Text>
                   <DateFilter setDate={setDate} {...props}/>
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
                 <ReserveForm count={count} tableId={resTableId} date={date} {...props}/>
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
