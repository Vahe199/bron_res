import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    ScrollView, SafeAreaView, LogBox,
} from "react-native";
import RestItem from "./RestaurantsItem";
import Filter from "../Include/Filter";
import {useSelector} from "react-redux";
import {ModalPicker} from "../Include/ModalPicker";
import {AntDesign} from "@expo/vector-icons";
import {ButtonList} from "./ButtonList/ButtonList";


function RestaurantsScreen(props) {
    const [chooseData, setChooseData] = React.useState("Выбрать город");
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const {topRest} = useSelector(state => state.topPage)
    const changeModalVisibility = () => {
        if(isModalVisible){
            setIsModalVisible(false)
        }else {
            setIsModalVisible(true)
        }

    }
    const setData = (city) => {
        setChooseData(city)
    }
    React.useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    return (
        <ImageBackground source={require('../../../assets/images/pageBackground.png')} style={{flex: 1}}>
            <ScrollView contentContainerStyle={{padding:20}} showsVerticalScrollIndicator={false}>
                <View style={styles.touchable}>
                    <TouchableOpacity style={styles.button} activeOpacity={0.5}
                                      onPress={changeModalVisibility}>
                        <Text style={styles.textBtn}>{chooseData}</Text>
                        <AntDesign name={isModalVisible ? "up" : "down"} size={18} color="black"/>
                    </TouchableOpacity>
                    <View style={styles.item}>
                        {isModalVisible && <ModalPicker setData={setData}
                                                        changeModalVisibility={changeModalVisibility}/>}
                    </View>
                </View>
                <View style={styles.filter}>
                    <Filter {...props} visible={isModalVisible}/>
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
    touchable: {
        width:200,
        paddingVertical:15,
        zIndex:1
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
    text: {
        fontSize: 20,
        fontWeight: "600",
    },

    textBtn: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: "600",
        color: '#000',
    }

})
export default RestaurantsScreen;