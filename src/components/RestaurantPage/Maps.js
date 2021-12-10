import * as React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import findMi from "../../../assets/images/findMe.png"
import Splash from "../Utils/Splash";
import {ButtonList} from "./ButtonList/ButtonList";
import {useSelector} from "react-redux";
import {MARKER_IMG_API} from "@env";


const MapsScreen = (props) => {
    const {latitude,longitude,loading,restaurant} = useSelector(state => state.nearMe)
    const marcRef = React.useRef()
    if (loading) {
        return <Splash/>
    }
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                     ref = {marcRef}
                     initialRegion={{
                         latitude: latitude,
                         longitude:longitude,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}
                     showsUserLocation={true}
                     showsMyLocationButton={false}
                     provider={PROVIDER_GOOGLE}>
                {
                    restaurant?.map((el, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{latitude: Number(el.latitude), longitude: Number(el.longitude)}}
                                animation={true}
                                title={el.companyname}>
                                <Image source={{uri:`${MARKER_IMG_API}${el.categories}`}} style={{height: 35, width:35 }} />
                            </Marker>);
                    })
                }
                <MapView.Marker.Animated
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }}/>
            </MapView>
            <View style={styles.view}>
              <ButtonList {...props}/>
            </View>
            <View style={styles.locationView}>
            <TouchableOpacity activeOpacity={0.5}
                              onPress = {() => marcRef.current.animateCamera({
                                  center: {
                                      latitude: latitude,
                                      longitude: longitude,
                                  },
                                  heading: 0,
                                  pitch: 90,
                              })}
                              style={styles.locationBtn} >
                <Image source={findMi} style={styles.locationBtnImg}/>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,


    },
    mb:{
        marginBottom:1
    },
    view:{
        zIndex:1,
        position:'absolute',
        left:10,
        top:10,

    },
    locationView:{
        zIndex:1,
        position:'absolute',
        bottom: '7%',
        right:'5%'

    },
    locationBtnImg:{
        width:10,
        height:10,
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    locationBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:50,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,

    },
});

export default MapsScreen;
