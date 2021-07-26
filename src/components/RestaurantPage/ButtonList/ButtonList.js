import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const ButtonList = (props) => {
    return(
        <View style={styles.container}>
        <View style={styles.view}>
            <TouchableOpacity activeOpacity={0.7} disabled={props.route.name ==="Рядом со мной"?true:false}
                              onPress={()=>props.navigation.push('Рядом со мной')}
                              style={props.route.name =='Рядом со мной'?[styles.button, styles.active]: styles.button} >
                <Text style={styles.textBtn}>Список</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} disabled={props.route.name ==="Рядом Со мной"?true:false}
                              onPress={()=>props.navigation.push('Рядом Со мной')}
                              style={props.route.name =='Рядом Со мной'?[styles.button, styles.active]: styles.button} >
                <Text style={styles.textBtn}>Карта</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    view:{
        flexDirection:'row',
        marginBottom: 10,
        paddingVertical: 10
    },
    button: {
        width:93,
        height: 40,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        elevation: 3,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },

    active: {
        backgroundColor:'#e9e9e9'
    },
    textBtn: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "600",
        color: '#000',
    }

})