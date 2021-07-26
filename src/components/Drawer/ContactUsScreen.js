import React from "react";
import { ImageBackground, Text, View, StyleSheet, TouchableOpacity, Linking } from "react-native";

function ContactUsScreen(props) {

    return ( <ImageBackground source={require('../../../assets/images/pageBackground.png')} style={{flex:1}}>
            <View style={styles.container}>
                <View>
                    <View style={styles.block}>
                        <Text style={styles.textTitle}>Номер телефона</Text>
                        <Text style={styles.text}>+7(123) 4567890</Text>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.textTitle}>Эл. почта</Text>
                        <Text style={styles.text}>something@gmail.com</Text>
                    </View>
                    <View style={styles.block}>
                        <Text style={styles.textTitle}>Адрес</Text>
                        <Text style={styles.text}>something address</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => Linking.openURL('https://web-ex.tech/')} style={styles.footer}>
                    <Text style={styles.footerText}>Сделано Webex Technologies</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-between',
    },
    block: {
        paddingLeft: 25,
        borderBottomWidth:2,
        borderBottomColor:'#e0e0e0',
        paddingVertical:15
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '700',
       marginBottom:5
    },
    text: {
        fontSize: 14,
    },
    footer: {
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontWeight: '800',
        fontSize: 15,
    }
})
export default ContactUsScreen;