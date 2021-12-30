import React from "react";
import { ImageBackground, useWindowDimensions,Platform, PermissionsAndroid} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import bgImage from "../../assets/Splash.png"
const HomeScreen = ({navigation}) => {
    const { height, width } = useWindowDimensions();
       async function requestPermissions() {
        if (Platform.OS === 'ios') {
            const auth = await Geolocation.requestAuthorization("whenInUse");
            if(auth === "granted") {
                // do something if granted...
            }
        }

        if (Platform.OS === 'android') {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // do something if granted...
            }
        }
    }
    useFocusEffect(
        React.useCallback(() => {
            requestPermissions()
           setTimeout(()=>{
               navigation.push("Рестораны")
           },2000)
            return () => null;
        }, [])
    );
    return(
        <ImageBackground source={bgImage} resizeMode="cover" style={{flex:1,height, width}}>
        </ImageBackground>
    )
}
export default HomeScreen;
