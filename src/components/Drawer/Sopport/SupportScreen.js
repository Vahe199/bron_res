import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from "react-native";
import {AntDesign} from "@expo/vector-icons";
const SupportScreen = (props) => {
    return (
        <ImageBackground source={require('../../../../assets/images/pageBackground.png')} style={{flex:1}}>
            <View style={styles.container}>
                <View>
                    <Image source={require('../../../../assets/images/support.png')} style={styles.img}/>
                </View>
                <View style={[styles.text,{ marginBottom:10}]}>
                    <Text style={{fontSize: 22,color:'#de3332',fontWeight:'700'}}>Нужна помощь ?</Text>
                </View>
                    <TouchableOpacity activeOpacity={0.5}
                                       onPress={() => console.log('Call us')}
                                      style={[styles.button,styles.btnCall]}>
                        <Text style={styles.textBtn}>Позвоните нам</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={() => props.navigation.push('Сообщение')}
                                      style={[styles.button,styles.btnMsg]}>
                        <Text style={[styles.textBtn,{color: '#fe921f'}]}>Отправить сообщение</Text>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.5} style={styles.foot}>
                        <Text style={{fontSize: 14}}>Политика Конфиденциальности</Text>
                        <AntDesign name="arrowright" size={16} color="black" />
                    </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingHorizontal: 50,
    },
    img: {
        width: 180,
        height: 180,
        marginBottom:'5%'
    },
    text: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        lineHeight: 19,
        fontWeight: "600",
        color: '#fff',
        textAlign:'center'
    },
    foot:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        bottom:10,
    }

})

export default SupportScreen;