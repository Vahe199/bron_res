import React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantsData} from "../../redux/action/restaurant-action";

const Filter = (props) => {

    const dispatch = useDispatch()
const {category} = useSelector(state => state.topPage)
    const getCategoryHandler = async (category) => {
        if(props.route.name === "Категория"){
           await dispatch(getRestaurantsData(category))
        }else {
             await dispatch(getRestaurantsData(category))
            props.navigation.push('Категория')
        }
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
                          <TouchableOpacity activeOpacity={0.5} key={item.id} disabled={props.visible}
                                            onPress={()=>getCategoryHandler(item.name)}
                                            style={styles. FilterBtn} >
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
    text:{
        fontSize:20,
        fontWeight: "600",
    }
})
export default Filter