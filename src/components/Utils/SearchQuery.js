import React, { useEffect, useState } from "react";
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {FlatList, TouchableOpacity} from "react-native-gesture-handler";
import {useSelector} from "react-redux";

export const SearchQuery = (props) => {

    const {searchRestaurants} = useSelector(state => state.search)
    const [arrayForRender, setArrayForRender] = useState([])

    useEffect(() => {
        if(searchRestaurants.length > 0){
            setArrayForRender(searchRestaurants)
        }else{
            setArrayForRender(props.topRest)
        }
    }, [searchRestaurants])

    let search = (resName) => {
        props.navigation.push('Индивидуальный рест', resName)
    }



    const ItemView = ({item}) => {
        return(<View style={{flex: 1, minHeight: 50}}>
            <TouchableOpacity onPress={() => search(item.restaurant_name)} activeOpacity={0.5}>
                <Text style={styles.itemName}>
                    {item.restaurant_name}
                </Text>
                <Text style={styles.itemAddress}>
                    {item.address}
                </Text>
            </TouchableOpacity>
            </View>

        )
    }
    const ItemSeparatorView = () => {
        return(
            <View
                style={{height:0.5,width:'100%',backgroundColor:'#c8c8c8'}}/>
        )
    }
    return(
        <SafeAreaView>
                    <View style={styles.flatList}>
                    <FlatList data={searchRestaurants}
                              keyExtractor={(item,index)=>index.toString()}
                              ItemSeparatorComponent={ItemSeparatorView}
                              renderItem={ItemView}/>
                    </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flatList:{
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
         height:Dimensions.get('window').height-115,
    },
    itemName:{
       backgroundColor: '#fff',
        paddingHorizontal: 10,
        fontSize: 19,
    },
    itemAddress: {
        backgroundColor:'#fff',
        paddingHorizontal: 10,
        color: '#6E7F80',
        marginTop: 3,
        fontSize: 16,
    }
})