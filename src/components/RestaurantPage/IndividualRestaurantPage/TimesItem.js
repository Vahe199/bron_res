import React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantsData} from "../../../redux/action/restaurant-action";

export const TimesItem = (props) => {
    const dispatch = useDispatch()
    const  category = [
        {id:1,name:'6:00 PM'},
        {id:2,name:'6:45 PM'},
        {id:3,name:'7:30 PM'},
        {id:4,name:'8:00 PM'},
        {id:5,name:'8:25 PM'},
        {id:6,name:'8:55 PM'},
        {id:7,name:'9:30 PM'},
        {id:8,name:'10:25 PM'},
        {id:9,name:'10:55 PM'},
        {id:10,name:'11:25 PM'},
    ]

    const getCategoryHandler = async (category) => {
        // if (props.route.name === "Category") {
        //  //   await dispatch(getRestaurantsData(category))
        // } else {
        //     //  await dispatch(getRestaurantsData(category))
        //   //  props.navigation.push('Category', category)
        // }
    }
    return (
        <View>
            <View style={styles.view}>

                <FlatList horizontal
                          pagingEnabled={true}
                          showsHorizontalScrollIndicator={false}
                          legacyImplementation={false}
                          data={category} keyExtractor={(item, index) => index.toString()}
                          renderItem={({item}) => (
                              <TouchableOpacity activeOpacity={0.5} key={item.id}
                                                onPress={() => getCategoryHandler(item.name)}
                                                style={styles.FilterBtn}>
                                  <Text style={styles.textBtn}>{item.name}</Text>
                              </TouchableOpacity>
                          )}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
    },
    FilterBtn: {
        marginRight: 10,
        marginTop: 10,
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
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "600",
        color: '#000',
    },
    text: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 10
    }
})