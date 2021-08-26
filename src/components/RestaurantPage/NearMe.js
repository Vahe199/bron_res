import React from "react";
import {
    View,
    StyleSheet,
    ImageBackground, ScrollView
} from "react-native";
import RestItem from "./RestaurantsItem";
import {useSelector} from "react-redux";
import {ButtonList} from "./ButtonList/ButtonList";
import Splash from "../Utils/Splash";

function NearMe(props) {
    const {restaurant,loading} = useSelector(state => state.nearMe)

    if (loading) {
        return <Splash/>
    }
    return (
        <ImageBackground source={require('../../../assets/images/pageBackground.png')} style={{flex:1}}>
            <View style={styles.container}>
                 <View style={{marginBottom:13}}>
                     <ButtonList {...props}/>
                 </View>
                <View style={{marginTop:50}}>
                    <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingVertical:20}}>
                        <RestItem restaurant={restaurant} {...props}/>
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingTop:10,
    }

})
export default NearMe;
