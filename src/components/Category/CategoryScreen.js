import React from "react";
import {FlatList, ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import {Header} from "../Utils/Header";
import Filter from "../Utils/Filter";
import CardItem from "./CardItem";
import {useSelector} from "react-redux";
import {CityFilter} from "../Utils/CityFilter";


const CategoryScreen = (props) => {
  const {title} = useSelector(state => state.restaurantPage)

  //My code
  const {restaurant} = useSelector(state => state.nearMe)
  //End


    return(

        <ImageBackground source={require('../../../assets/images/pageBackground.png')} style={styles.root}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container} >
                <View style={{alignItems:'flex-end',marginBottom:-25}}>
                    <CityFilter/>
                </View>
                <View style={styles.filter}>
                    <Filter {...props}/>
                </View>
                <View style={styles.list}>

                    <FlatList numColumns={2}
                              showsVerticalScrollIndicator={false}
                        data={restaurant} keyExtractor={(item, index) => index.toString()}
                              renderItem={({item}) => (
                                  <CardItem el={item} key={item.id}{...props}/>
                              )}/>
                </View>
            </View>
            </ScrollView>
        </ImageBackground>
    )

}
const styles = StyleSheet.create({
     root:{
        flex:1,
        flexDirection:'column'
    },
    container:{
        padding:10,
    },
    contentContainer: {
        paddingVertical: 20
    },
    filter:{
         alignItems: 'center',
         marginBottom:'10%',
        flexDirection: 'row'
         // width:320,
         // marginLeft:'5%'
    },
    list:{
         alignItems:'center',
        justifyContent:'space-between'
    }

})

export default CategoryScreen;
