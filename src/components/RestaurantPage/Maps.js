import * as React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions, Alert, TouchableOpacity, Image} from 'react-native';
import * as Location from 'expo-location';
import loaction1 from "../../../assets/images/locationIcon/loaction1.png";
import locat from "../../../assets/images/locationIcon/location2.png";
import locatio from "../../../assets/images/locationIcon/location3.png";
import findMi from "../../../assets/images/findMe.png"
import Splash from "../Include/Splash";
import {ButtonList} from "./ButtonList/ButtonList";

const MapsScreen = (props) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const coordinates = [
         {id:1,latitude:40.19473293458804,longitude:44.51945165511966, name:'test', category:'Sushi'},
        {id:2,latitude:40.193472824147634,longitude:44.49905740097165, name:'test2', category:'Shawurma'},
        {id:3,latitude:40.18945489627308,longitude:44.53552873805165, name:'test', category:'Pizza'},
        {id:4,latitude:40.19073293458804,longitude:44.51745165511966, name:'test', category:'Sushi'},
        {id:5,latitude:40.18573974033876,longitude:44.51723741367459, name:'test', category:'Shawurma'},
        {id:6,latitude:40.20405127280607,longitude:44.515817519277334, name:'test', category:'Pizza'},
        {id:7,latitude:40.20215481267812,longitude:44.52466445043683, name:'test', category:'Sushi'},
        {id:8,latitude: 40.1878110833307367,longitude:44.50882198289037, name:'test', category:'Shawurma'},
        {id:9,latitude:40.195755212595515,longitude:44.50750736519695, name:'test', category:'Pizza'},
        {id:10,latitude:40.20318473590025,longitude: 44.5375001616776, name:'test', category:'Shawurma'},
        {id:11,latitude:40.18352771080333,longitude:44.5174365, name:'test',category:'Sushi'},
    ]

    const marcRef = React.useRef()
    const [pin, setPin] = React.useState({
        latitude: null,
        longitude: null
    })
    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Hey! You have not enabled selected permissions');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setPin({latitude:location.coords.latitude, longitude: location.coords.longitude});
            setIsLoading(false)
        })();
    }, []);

    if (isLoading) {
        return <Splash/>
    }
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                     ref = {marcRef}
                     initialRegion={{
                         latitude: pin.latitude,
                         longitude: pin.longitude,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}
                     showsUserLocation={true}
                     showsMyLocationButton={false}
                     provider={PROVIDER_GOOGLE}>
                {
                    coordinates.map((el, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{latitude: el.latitude, longitude: el.longitude}}
                                animation={true}
                                title={el.name}>
                                <Image source={el.category == 'Sushi'?loaction1:el.category=='Pizza'?locatio:locat} style={{height: 35, width:35 }} />
                            </Marker>);
                    })
                }
                <MapView.Marker.Animated
                    coordinate={pin}/>
            </MapView>
            <View style={styles.view}>
              <ButtonList {...props}/>
            </View>
            <View style={styles.locationView}>
            <TouchableOpacity activeOpacity={0.5}
                              onPress = {() => marcRef.current.animateCamera({
                                  center: {
                                      latitude: pin.latitude,
                                      longitude: pin.longitude,
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
