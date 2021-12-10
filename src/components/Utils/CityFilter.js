import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {StyleSheet, View, Text, TouchableOpacity,ScrollView} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { changeSelectedCity, fetchFilterRestoransWithCityName } from "../../redux/action/restaurant_filter_action_&_reducer";

export const CityFilter = (props) => {
    const dispatch = useDispatch()
    const {cities=[]} = useSelector(state => state.topPage);
    //My code
    const {selectedCity} = useSelector(state => state.nearMe);
    //End

    const [isModalVisible, setIsModalVisible] = React.useState(false);

    useEffect(() => {
        //console.log(cities[1]);
    }, [cities])

    const changeModalVisibility = () => {
        if(isModalVisible){
            setIsModalVisible(false)
        }else {setIsModalVisible(true)}
    }
    const onPressItem = async (city) => {
         await dispatch(fetchFilterRestoransWithCityName(city))
        setIsModalVisible(false)
        dispatch(changeSelectedCity(city))
        props.navigation.push('Категория', city)
    }
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.button} activeOpacity={0.5}
                              onPress={changeModalVisibility}>
                <Text style={styles.textBtn}>{selectedCity}</Text>
                <AntDesign name={isModalVisible ? "up" : "down"} size={18} color="black"/>
            </TouchableOpacity>
            {isModalVisible &&
            <View style={styles.modal}>
                <ScrollView>
                    {/* My code */}

                    {[{ "id": -1,
                        "name": "Все",
                    },...cities].map((city, i) => {
                        return (
                            <View style={styles.city}
                                  key={i}>
                                <TouchableOpacity
                                                  onPress={() => onPressItem(city.name)}>
                                    <Text style={styles.text}>{city.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}

                </ScrollView>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width:205,
        height:160,
        backgroundColor: '#fff',
        borderRadius: 10,
        position:'absolute',
        top:45,
        zIndex:3,
        elevation:1
    },
    city: {
        alignItems: 'flex-start',
        paddingHorizontal:20
    },
    button: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:205,
        height: 42,
        borderRadius: 7,
        elevation: 3,
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        marginBottom:5,
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
    text: {
        margin: 3,
        fontSize: 16,
        fontWeight: '500'
    }
})
