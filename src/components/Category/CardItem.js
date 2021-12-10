import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {Card} from 'react-native-elements'
function CardItem({ el,navigation}) {
    const longPressHandler = () => {
        navigation.push('Индивидуальный рест',el.name)
    }
    return (
        <TouchableOpacity activeOpacity={0.9}
                         onPress={longPressHandler}
           // onLongPress={longPressHandler}
        >
            <Card containerStyle={styles.card} >
                <Card.Image style={styles.cardImages}
                            source={{url: el.img}}/>

                <View style={styles.cardText}>
                    <View style={styles.text}>
                        <Text style={styles.name}>{el.restaurant_name}</Text>
                        <Text style={styles.address}>{el.address}</Text>
                    </View>
                    <Image style={styles.imageIcon}
                           source={require('../../../assets/images/Arrow.jpg')}
                    />
                </View>
            </Card>
        </TouchableOpacity>

    );
}
const styles= StyleSheet.create({
    card:{
        flex: 1,
        width:170,
        borderRadius:20,
        padding:0,
        margin: "auto",
        marginRight:5,
        marginBottom: 5
    },
    cardImages:{
        width:'100%',
        height: 100,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    cardText:{
        padding:10
    },
    text:{
        width:'100%',
        marginBottom:10
    },
    name:{
        color:'#aa0a1e',
        fontSize: 18
    },
    address:{
        fontSize:12,
        color: '#646464'
    },
    imageIcon:{
        width:30,
        height:10,
        marginLeft:'80%',
        marginTop:'-10%'
    },

})
export default CardItem;