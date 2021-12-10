import React, { useEffect } from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantsCategory} from "../../redux/action/restaurant_action_&_reducer";
import { fetchFilterRestoransWithCategorys } from "../../redux/action/restaurant_filter_action_&_reducer";

const Filter = (props) => {
    const dispatch = useDispatch()
const {category} = useSelector(state => state.topPage)
const {selectedCategory} = useSelector(state => state.restaurantPage)
//My code
const {selectedCity} = useSelector(state => state.nearMe);
//End



    const getCategoryHandler =  (category, selectedCity) => {
            dispatch(fetchFilterRestoransWithCategorys(category, selectedCity))
            props.navigation.push('Категория',category+ ' ' + 'бары')

    }

    return(
    <View>
        <Text style={styles.text}>Фильтр</Text>
        <View style={styles.view}>

            <FlatList horizontal
                      bounces={false}
                      showsHorizontalScrollIndicator={false}
                      viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
                      legacyImplementation={false}
                      data={category}
                      keyExtractor={(item,index) => index.toString()}
                      renderItem={({item}) => (
                          <TouchableOpacity activeOpacity={0.5} key={item.id}
                                            onPress={()=>getCategoryHandler(item.name, selectedCity)}
                                            style={selectedCategory === item.name?[styles. FilterBtn,styles.active]:styles. FilterBtn} >
                              <Text style={styles.textBtn}>{item.name}</Text>
                          </TouchableOpacity>
                      )}/>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    view:{
        flexDirection:'row',
        marginTop: 10

    },
    FilterBtn:{
        marginRight:10,
        marginTop:10,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
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
    textBtn: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "600",
        color: '#000',
    },
    active:{
        backgroundColor:'#e9e9e9'
    },
    text:{
        fontSize:20,
        fontWeight: "600",
    }
})
export default Filter
