import React from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';

const DrawerContent = (props) => {
    return(
        <LinearGradient
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#faab22', '#f16909']}
            style={styles.background}>
            <DrawerContentScrollView style={styles.container} {...props}>
                    <TouchableOpacity  onPress={()=>props.navigation.navigate('Рестораны')} activeOpacity={0.8}>
                    <View style={styles.logoInfoSection}>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/images/logo2.png')}
                            />
                    </View>
                    </TouchableOpacity>
                <DrawerItem label={'Главная страница'} style={styles.buttonDrawerItem}
                            labelStyle={styles.label}
                            onPress={()=>props.navigation.navigate('Рестораны')}>

                </DrawerItem>
                    <DrawerItem label={'О нас'} style={styles.buttonDrawerItem}
                                labelStyle={styles.label}
                                onPress={()=>props.navigation.navigate('О нас')}>

                    </DrawerItem>
                        <DrawerItem label={'Поддержка'} style={styles.buttonDrawerItem}
                                    labelStyle={styles.label}
                                    onPress={()=>props.navigation.navigate('Поддержка')}>

                        </DrawerItem >
                        <DrawerItem label={'Свяжитесь с нами'} style={styles.buttonDrawerItem}
                                    labelStyle={[styles.label,{}]}
                                    onPress={()=>props.navigation.navigate('Свяжитесь с нами')}>

                        </DrawerItem>

            </DrawerContentScrollView>
            <DrawerItem label={'Правила пользования'} style={styles.buttonTerms}
                        labelStyle={styles.label}
                        onPress={()=>props.navigation.navigate('Правила пользования')}>

            </DrawerItem>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    container:{
        flex:1,
        flexDirection:'column',
    },
    logoInfoSection:{
        alignItems:'center',
        justifyContent: 'center',
        height: 170,
        padding:10,
        margin:10,
        borderBottomWidth:1,
        borderColor: '#fff',
    },
    logo:{
        width:'100%',
        height:'100%'
    },

    label:{
        color: '#fff',
        fontSize:18,
        paddingHorizontal:25,
        paddingVertical:-20
    },
    buttonDrawerItem:{
        color:'#fff',
        borderBottomWidth:1,
        borderColor: '#fff',
        marginTop:-10

    },
    buttonTerms:{
        color:'#fff',
        borderTopWidth:1,
        borderTopColor: '#fff',
        marginTop:0,
        height:45
    }
})
export default DrawerContent;