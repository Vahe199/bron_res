import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground, Dimensions, ScrollView
} from "react-native";
import RestItem from "./RestaurantsItem";
import {useSelector} from "react-redux";
import {ButtonList} from "./ButtonList/ButtonList";

function NearMe(props) {
    const {rest} = useSelector(state => state.topPage)

    return (
        <ImageBackground source={require('../../../assets/images/pageBackground.png')} style={{flex:1}}>
            <View style={styles.container}>
                 <View style={{marginBottom:13}}>
                     <ButtonList {...props}/>
                 </View>
                <View style={{marginTop:50}}>
                    <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingVertical:20}}>
                        <RestItem restaurant={rest} {...props}/>
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
