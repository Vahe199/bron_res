import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from "react-native";
import { Divider} from 'react-native-elements'
import {REST_LOGO_API} from "@env"
import {useDispatch} from "react-redux";
import {getIndividualRestaurantsData} from "../../redux/action/individualrestaurant_action_&_reducer";
import logo from "../../../assets/logo.png";


function RestItem({restaurant,navigation}) {
    const dispatch = useDispatch()
const individualRestHandler = async (resName,id) => {
    await dispatch(getIndividualRestaurantsData(resName,id))
     navigation.push('Индивидуальный рест',resName)
}
    return (
        <View style={{flex:1}}>
            <FlatList showsVerticalScrollIndicator={false}
                      data={restaurant} keyExtractor={(item, index) => index.toString()}
                      renderItem={({item}) => (
                          <TouchableOpacity activeOpacity={0.7} style={styles.wrapper}
                                            onPress={()=>individualRestHandler(item.restaurant_name,item.id)}>
                              <View style={styles.container}>
                                  <Image
                                      style={styles.image}
                                      resizeMode="cover"
                                      source={item.logo? { uri:`${REST_LOGO_API}${item.logo}`}:logo}
                                  />
                                  <Divider orientation="vertical" width={2} style={styles.divider} />
                                  <View style={styles.textContainer}>
                                      <Text style={styles.name}>{item.restaurant_name}</Text>
                                      <Text style={styles.address}>{item.address}</Text>
                                  </View>
                                  <Image style={styles.imageIcon}
                                         source={require('../../../assets/images/Arrow.jpg')}
                                  />
                              </View>
                          </TouchableOpacity>
                      )}/>
        </View>
    );
}
const styles= StyleSheet.create({
    wrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius:15,
        borderWidth:0,
        marginVertical:5,
        marginHorizontal:1,
        width: '99%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    container:{
        flexDirection:'row',
        backgroundColor:'#fefefe',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius:15,
        borderWidth:0,
         padding:10,
        width: '100%',


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
        marginTop:35,
        width:30,
        height:30
    },
    divider:{
        marginLeft: 10,
        marginRight:10
    },
    textContainer:{
        width:'60%',
        marginBottom:10
    },
})
export default RestItem;
