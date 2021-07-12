import React from "react";
import {useSelector} from "react-redux";
import {StyleSheet, View, Text} from "react-native";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";

export const ModalPicker = (props) => {
    const {cities} = useSelector(state => state.topPage);
    const onPressItem = (city) => {
        props.changeModalVisibility(false)
        props.setData(city)
    }
    return (
        <View style={styles.container} >
            <View style={styles.modal}>
                <ScrollView>
                    {cities.map((city, i) => {
                        return (
                            <View style={styles.city}
                                  key={i}>
                                <TouchableOpacity
                                                  onPress={() => onPressItem(city)}>
                                    <Text style={styles.text}>{city}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative'

    },
    modal: {
        width:205,
        height:160,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    city: {
        alignItems: 'flex-start',
        paddingHorizontal:20
    },
    text: {
        margin: 3,
        fontSize: 16,
        fontWeight: '500'
    }
})