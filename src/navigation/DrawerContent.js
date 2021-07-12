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
                    <TouchableOpacity  onPress={()=>props.navigation.navigate('Restaurants')} activeOpacity={0.8}>
                    <View style={styles.logoInfoSection}>
                            <Image
                                style={styles.logo}
                                source={require('../../assets/images/logo2.png')}
                            />
                    </View>
                    </TouchableOpacity>
                    <DrawerItem label={'About'} style={styles.buttonDrawerItem}
                                labelStyle={styles.label}
                                onPress={()=>props.navigation.navigate('About us')}>

                    </DrawerItem>
                        <DrawerItem label={'Support'} style={styles.buttonDrawerItem}
                                    labelStyle={styles.label}
                                    onPress={()=>props.navigation.navigate('Support')}>

                        </DrawerItem >
                        <DrawerItem label={'Contact us'} style={styles.buttonDrawerItem}
                                    labelStyle={[styles.label,{}]}
                                    onPress={()=>props.navigation.navigate('Contact us')}>

                        </DrawerItem>

            </DrawerContentScrollView>
            <DrawerItem label={'Terms of use'} style={styles.buttonTerms}
                        labelStyle={styles.label}
                        onPress={()=>props.navigation.navigate('Terms of use')}>

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