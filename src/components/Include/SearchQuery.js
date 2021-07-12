import React from "react";
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {FlatList, TouchableOpacity} from "react-native-gesture-handler";

export const SearchQuery = (props) => {

    const ItemView = ({item}) => {
        return(<View style={{flex: 1}}>
            <TouchableOpacity onPress={()=>props.search()} activeOpacity={0.5}>
                <Text style={styles.itemStyle}>
                    {item.id}{'. '}{item.title.toUpperCase()}
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
    itemStyle:{
       backgroundColor:'#fff',
        padding:15,
    },
})