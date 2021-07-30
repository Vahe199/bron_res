import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {Header} from "../../Include/Header";
export const Confirmation = (props) => {

    return (
<View style={{flex:1}}>
    <ImageBackground source={require('../../../../assets/images/pageBackground.png')} style={{flex:1}}>
        <View style={styles.container}>
            <View>
                <Image source={require('../../../../assets/images/confirmation.png')} style={styles.img}/>
            </View>
            <View style={styles.text}>
                <Text style={{fontSize: 18,color:'#de3332',fontWeight:'700',marginBottom:10}}>Бронирование подтверждено</Text>
                <Text style={{color: '#808080',textAlign:'center',fontSize:15}}>
                    Ваше бронрование в Ресторане Шереп на Пятницу, 28 Мая в 18:45 для 5 гостей подтверждено!
                </Text>

            </View>
            <TouchableOpacity activeOpacity={0.5}
                 onPress={() => props.navigation.push('Рестораны')}
                              style={[styles.button,styles.btnCall]}>
                <Text style={styles.textBtn}>Закрывать</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5}
                              // onPress={() => props.navigation.push('Message')}
                              style={[styles.button,styles.btnMsg]}>
                <Text style={[styles.textBtn,{color: '#fe921f'}]}>Обратная связь</Text>
            </TouchableOpacity>
        </View>
            </ImageBackground>
</View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // backgroundColor: '#fff',
        paddingHorizontal: 50,
    },
    img: {
        width: 200,
        height: 200,
    },
    text: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:10
    },
    button: {
        width:'100%',
        height: 50,
        margin:10,
        alignItems: 'center',
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
    btnCall:{
        backgroundColor: '#c50000',
    },
    btnMsg:{
        backgroundColor:'#fff',
        borderWidth: 2,
        borderColor:'#fe921f',
        marginBottom:'20%'
    },

    textBtn: {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: "600",
        color: '#fff',
    },
})
