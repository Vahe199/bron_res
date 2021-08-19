import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Text, TouchableOpacity,
    View
} from "react-native";
import {RoomItem} from "./utilComponents/RoomItem";
import {useSelector} from "react-redux";

export const IndividualRestaurantPage = (props) => {
    const {room} = useSelector(state => state.individualPage);
    return (
        <ImageBackground source={require('../../../../assets/images/pageBackground.png')} style={{flex: 1}}>
                    <View style={styles.container}>
                            <RoomItem/>
                        <View>
                            <TouchableOpacity activeOpacity={0.7}
                                              onPress={() => props.navigation.navigate('Таблица бронирования', room.hall_name)}
                                              style={styles.button}>
                                <Text style={styles.textBtn}>Забронировать столик</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
         paddingBottom: 60
    },

    floorPlan: {
        backgroundColor: '#fff',
        height: 250,
        width: '100%',
        padding: 4,
        borderRadius: 15,
    },
    description: {
        marginVertical: 15,
        fontWeight: 'bold',
        fontSize: 24
    },
    button: {
        width: 330,
        height: 50,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#c50000',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 13,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

    },
    textBtn: {
        fontSize: 22,
        lineHeight: 25,
        fontWeight: "600",
        color: '#fff',
    },
})
