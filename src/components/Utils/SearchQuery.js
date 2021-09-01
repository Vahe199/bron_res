import React from "react";
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {FlatList, TouchableOpacity} from "react-native-gesture-handler";
import {getIndividualRestaurantsData} from "../../redux/action/individualrestaurant_action_&_reducer";
import {useDispatch} from "react-redux";

export const SearchQuery = (props) => {
    const dispatch = useDispatch()
    const individualRestHandler = async (resName,id) => {
        await dispatch(getIndividualRestaurantsData(resName,id))
        props.navigation.push('Индивидуальный рест',resName)
    }
    const ItemView = ({item}) => {
        return(<View style={{flex: 1, minHeight: 50}}>
                <TouchableOpacity
                     onPress={() => individualRestHandler(item.restaurant_name,item.id)}
                                  activeOpacity={0.5}>
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
                <FlatList data={props.filterData}
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
