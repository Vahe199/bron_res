import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { Divider} from 'react-native-elements'
function RestItem({ el,navigation}) {

const individualRestHandler = (resName) => {
    navigation.push('Individual Rest',resName)
}
    return (
        <TouchableOpacity activeOpacity={0.8}
                          onPress={()=>individualRestHandler(el.name)}

            // onLongPress={longPressHandler}
        >
                  <View style={styles.container}>

                         <Image
                             style={styles.image}
                             resizeMode="cover"
                             source={{ uri: el.logo }}
                         />
                      <Divider orientation="vertical" width={2} style={styles.divider} />
                      <View style={styles.text}>
                          <Text style={styles.name}>{el.name}</Text>
                          <Text style={styles.address}>{el.address}</Text>
                      </View>
                      <Image style={styles.imageIcon}
                          source={require('../../../assets/images/Arrow.jpg')}
                      />
                  </View>
        </TouchableOpacity>

    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fefefe',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding:10,
        borderRadius:15,
        borderWidth:0,
        marginTop:10,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
   name:{
      color:'#aa0a1e',
       fontSize: 18
   },
    address:{
        fontSize:16,
        color: '#646464'
    },
    image:{
        width:60,
        height:60
    },
    imageIcon:{
        width:30,
        height:30
    },
    divider:{
        marginLeft: 10,
        marginRight:10
    },
    text:{
        width:'60%',
        marginBottom:10
    }

})
export default RestItem;