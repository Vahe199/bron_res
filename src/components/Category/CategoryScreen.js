import React from "react";
import {FlatList, ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import {Header} from "../Utils/Header";
import Filter from "../Utils/Filter";
import CardItem from "./CardItem";
import {useSelector} from "react-redux";
import {CityFilter} from "../Utils/CityFilter";
import Splash from "../Utils/Splash";


const CategoryScreen = (props) => {

    const {restaurant,loading} = useSelector(state => state.filter)


    return(loading ? <Splash/>:
            <ImageBackground source={require('../../../assets/images/pageBackground.png')} style={styles.root}>
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container} >
                <View style={{alignItems:'flex-end',marginBottom:-25}}>
                    <CityFilter {...props}/>
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
