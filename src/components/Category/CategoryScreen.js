import React from "react";
import {FlatList, ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import {Header} from "../Include/Header";
import Filter from "../Include/Filter";
import CardItem from "./CardItem";
import {useSelector} from "react-redux";


const CategoryScreen = (props) => {
  const { restaurant,title} = useSelector(state => state.restaurantPage)

    return(

        <ImageBackground source={require('../../../assets/images/pageBackground.png')} style={styles.root}>
            <View style={{zIndex:1}}>
                <Header title={title + ' ' + 'Bar'}{...props}/>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container} >
                <View style={styles.filter}>
                    <Filter {...props}/>
                </View>
                <View style={styles.list}>

                    <FlatList numColumns={2}
                        data={ restaurant} keyExtractor={(item, index) => index.toString()}
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
         width:320,
         marginLeft:'5%'
    },
    list:{
         alignItems:'center',
        justifyContent:'space-between'
    }

})

export default CategoryScreen;