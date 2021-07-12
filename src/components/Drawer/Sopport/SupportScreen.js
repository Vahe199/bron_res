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
                    <Text style={{fontSize: 22,color:'#de3332',fontWeight:'700'}}>Need some help ?</Text>
                </View>
                    <TouchableOpacity activeOpacity={0.5}
                                       onPress={() => console.log('Call us')}
                                      style={[styles.button,styles.btnCall]}>
                        <Text style={styles.textBtn}>Call us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={() => props.navigation.push('Message')}
                                      style={[styles.button,styles.btnMsg]}>
                        <Text style={[styles.textBtn,{color: '#fe921f'}]}>Send message</Text>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.5} style={styles.foot}>
                        <Text style={{fontSize: 18}}>Privacy Policy</Text>
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
        fontSize: 22,
        lineHeight: 25,
        fontWeight: "600",
        color: '#fff',
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