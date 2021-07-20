import React from "react";
import {
    StyleSheet,
    ImageBackground,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView, SafeAreaView, LogBox,
} from "react-native";
import RestItem from "./RestaurantsItem";
import Filter from "../Include/Filter";
import {useSelector} from "react-redux";
import {ModalPicker} from "../Include/ModalPicker";
import {AntDesign} from "@expo/vector-icons";


function RestaurantsScreen(props) {
    const [chooseData, setChooseData] = React.useState("Choose city");
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
            <SafeAreaView style={{flex: 1}} >
                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        <View style={styles.touchable}>
                            <TouchableOpacity style={[styles.button,styles.touchableOpacity]} activeOpacity={0.5}
                                              onPress={changeModalVisibility}>
                                <Text style={[styles.textBtn,{fontSize: 18}]}>{chooseData}</Text>
                                <AntDesign name={isModalVisible?"up":"down"} size={18} color="black" />
                            </TouchableOpacity>
                            <View style={styles.item}>
                                {isModalVisible && <ModalPicker setData={setData}
                                                                changeModalVisibility={changeModalVisibility}/>}
                            </View>
                        </View>
                        <View style={styles.filter}>
                           <Filter {...props} visible={isModalVisible}/>
                        </View>
                        <View style={styles.wrapper}>
                            <Text style={[styles.text]}>Near me</Text>
                            <View style={styles.view}>
                                <TouchableOpacity activeOpacity={0.5}
                                                  onPress={() => props.navigation.push('Near me')}
                                                  style={styles.button}>
                                    <Text style={styles.textBtn}>List</Text>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5}
                                                  onPress={() => props.navigation.push('Near Me')}
                                                  style={styles.button}>
                                    <Text style={styles.textBtn}>Map</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.text}>Top restaurants</Text>
                            <FlatList showsVerticalScrollIndicator={false}
                                data={topRest} keyExtractor={(item, index) => index.toString()}
                                      renderItem={({item}) => (
                                          <RestItem el={item} key={item.id} {...props}/>

                                      )}/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        elevation: 0,

    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    filter: {
        padding: 10,
    },
    touchable: {
        width:200,
        padding: 10,
        zIndex:1
    },
    item:{
        position:'absolute',
        left:10,
        top:55,
        zIndex:2
    },
    touchableOpacity: {
        flexDirection:'row',
        justifyContent: 'space-between',
        width:205,
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        marginBottom:5,
    },
    wrapper: {
        flexDirection: 'column',
        padding: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10
    },
    view: {
        flexDirection: 'row',
        width:205,
        marginBottom:5,
        zIndex: 0
    },
    button: {
        width:98,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 19,
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
    }

})
export default RestaurantsScreen;