import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Text,
    View,
    ScrollView, LogBox,
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import {useDispatch, useSelector} from "react-redux";
import RestItem from "./RestaurantsItem";
import Filter from "../Include/Filter";
import {CityFilter} from "../Include/CityFilter";
import {ButtonList} from "./ButtonList/ButtonList";
import {changeSelectedCity, fetchTopPageData} from "../../redux/action/topRestaurant-action";
import Splash from "../Include/Splash";
import {getRestaurantsCategory} from "../../redux/action/restaurant-action";


function RestaurantsScreen(props) {
    const dispatch = useDispatch()
    const {topRest, loading} = useSelector(state => state.topPage)
    useFocusEffect(
        React.useCallback(() => {
            dispatch(fetchTopPageData())
            dispatch(getRestaurantsCategory(''))
            dispatch(changeSelectedCity('Выбрать город'))
            LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
            return () => null;
        }, [])
    );

    return ( loading ? <Splash/>:
        <ImageBackground source={require('../../../assets/images/pageBackground.png')} style={{flex: 1}}>
            <ScrollView contentContainerStyle={{paddingVertical:20, paddingHorizontal:15}} showsVerticalScrollIndicator={false}>
                <View style={styles.filterCity}>
                       <CityFilter {...props}/>
                </View>
                <View style={styles.filter}>
                    <Filter {...props}/>
                </View>
                <View style={{paddingVertical: 20}}>
                    <Text style={styles.text}>Рядом со мной</Text>
                    <View>
                        <ButtonList {...props}/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.text}>Лучшие рестораны</Text>
                        <RestItem restaurant={topRest} {...props}/>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    filterCity: {
        alignItems:'flex-start'
    },
    filter: {
        paddingTop: 5,
    },
    item:{
        position:'absolute',
        top:55,
        zIndex:2,
        elevation:2
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
    },


})
export default RestaurantsScreen;
