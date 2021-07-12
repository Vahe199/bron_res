import React from "react";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import RestItem from "./RestaurantsItem";

function NearMe(props) {
    const rest = [
        {
            id: 1,
            name: 'Tashir Pizza',
            address: '63 Komitas Ave ·',
            logo: 'http://www.tashirpizza.am/skin/frontend/tashir/default/images/logo.png'
        },
        {
            id: 2,
            name: 'Lavash restaurant',
            address: '21 Tumanyan St',
            logo: 'https://www.virtlo.com/uploads/places/39/39/kubbf516asghqsry1imfysnid.png'
        },
        {
            id: 3,
            name: 'Sherep Restaurant',
            address: '1 Amiryan St',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqeZfNhiO7FrjckHGaLEJ4y4QPI89aKV3CA&usqp=CAU'
        },
        {
            id: 4,
            name: 'Karas Food Chain',
            address: ' 1 Hrachya Kochar St',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFzz96bGDrebsGKGCzOV3DCWa9exFDzhGGw&usqp=CAU'
        },
        {
            id: 5,
            name: 'Karas Food Chain',
            address: ' 1 Hrachya Kochar St',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFzz96bGDrebsGKGCzOV3DCWa9exFDzhGGw&usqp=CAU'
        },
        {
            id: 6,
            name: ' EL Garden',
            address: '8 Tsitsernakaberd Hwy',
            logo: 'https://www.wedding.am/sites/default/files/styles/business_logo/public/business/logo/el%20garden.jpg?itok=DjBNo69a'
        },
        {
            id: 7,
            name: 'Sherep Restaurant',
            address: '1 Amiryan St',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqeZfNhiO7FrjckHGaLEJ4y4QPI89aKV3CA&usqp=CAU'
        },
        {
            id: 8,
            name: 'Lavash restaurant',
            address: '21 Tumanyan St',
            logo: 'https://www.virtlo.com/uploads/places/39/39/kubbf516asghqsry1imfysnid.png'
        },
    ]
    const longPressHandler = (name) => {
        console.log(name)
    }
    return (
        <ImageBackground source={require('../../../assets/images/pageBackground.png')} style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.view}>
                        <TouchableOpacity activeOpacity={0.5} disabled={true}
                                          onPress={()=>props.navigation.push('Near me')} style={styles.button} >
                            <Text style={styles.textBtn}>List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                                          onPress={()=>props.navigation.push('Near Me')} style={[styles.button, styles.offline]} >
                            <Text style={styles.textBtn}>Map</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingBottom:120}}>
                    <FlatList data={rest} keyExtractor={(item, index) => index.toString()}
                              renderItem={({item}) => (
                                  <RestItem el={item} key={item.id}{...props}/>
                              )}/>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    wrapper:{
        flexDirection: 'column',
        padding:20,
    },
    view:{
        flexDirection:'row',
        marginBottom: 10,
        paddingVertical: 10
    },
    button:{
        marginRight:10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 7,
        elevation: 3,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

    },
    offline: {
        backgroundColor:'#e9e9e9'
    },
    textBtn: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "600",
        color: '#000',
    }

})
export default NearMe;