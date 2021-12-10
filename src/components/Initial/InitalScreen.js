import React, {useEffect} from "react";
import {Image, useWindowDimensions, View} from "react-native";

export const InitialScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Рестораны')
        },1000)
    },[])

    const {width,height} = useWindowDimensions()
    return(
        <View style={{flex:1}}>
            <Image source={require('../../../assets/Splash.png')} style={{width,height}} />
        </View>
    )
}
