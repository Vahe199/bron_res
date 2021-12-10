import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";



    const ModalSupport = (props) => {

        return (
            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Text style={styles.headerText}>{props.title}</Text>
                    <Text>{props.text}</Text>
                </View>
            </View>
        )
    }

export default ModalSupport;



const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'absolute',
        width: '94%',
        marginHorizontal:'5%',
        marginVertical: '50%',
        padding: 12,
        borderRadius: 10,
        elevation: 5,
        height: 200,
    },
    modalHeader: {
        justifyContent: 'space-around',
        width: '100%',
        flex: 1,
        zIndex: 2,
        alignItems: 'center',
    },
    headerText: {
        color: '#35005F',
        fontSize: 20,
    },
    ok: {
        color: '#265DF4',
        fontSize: 20,
        alignSelf: 'flex-end',
    }
})
