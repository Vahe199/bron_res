import React from "react";
import {Image, Linking, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import arrowBack from "../../../assets/images/Back.png";
import phoneIcon from "../../../assets/images/phoneIcon.png";
import transparent from "../../../assets/images/table/transparent.png"
import {SearchQuery} from "./SearchQuery";
import {useSelector} from "react-redux";


export const Header = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchShow, setSearchShow] = React.useState(false);
    const [filterData, setFilterData] = React.useState([]);
    const [masterData, setMasterData] = React.useState([]);
    const {restaurant_name,phone} = useSelector(state => state.individualPage)
  const dialCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else {phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
    };
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.title ?
                    item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilterData(newData);
            setSearchQuery(text)
        } else {
            setFilterData(masterData);
            setSearchQuery(text)
        }
    }
    const fetchRestaurants = async () => {
        if (!searchShow) {
            const apiURL = 'https://jsonplaceholder.typicode.com/posts'
            await fetch(apiURL)
                .then((response) => response.json())
                .then((responseJson) => {
                    setFilterData(responseJson)
                    setMasterData(responseJson)
                }).catch((error) => {
                    console.error(error)
                })
            setSearchShow(true)
        } else {
            setSearchShow(false);
            setSearchQuery('')
        }
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#F16708','#FAB023' ]}
                start={{x: 0, y: 0}}
                end={{x: 1.2, y: 0}}
                style={styles.background}>
                <View style={styles.header}>
                    {props.scene?.descriptor.options.arrowBack ? <TouchableOpacity onPress={() => props.navigation.goBack()} activeOpacity={0.5}>
                            <Image source={arrowBack} style={styles.iconImg}/>
                        </TouchableOpacity>
                        : <MaterialIcons name='menu' size={35} onPress={() => props.navigation.openDrawer()}
                                         style={styles.icon}/>}
                    {searchShow ? <TextInput style={styles.search}
                                             placeholder="Поиск"
                                             placeholderTextColor={'#fff'}
                                             onChangeText={searchFilter}
                                             value={searchQuery}
                    /> : <Text style={styles.headerText}>{props.scene?.route.params?props.scene?.route.params : props.scene?.route.name}</Text>}
                    {props.scene?.descriptor.options.call ? <TouchableOpacity onPress={() =>dialCall(phone)}>
                        <Image source={phoneIcon} style={{width: 27, height: 27}}/>
                        </TouchableOpacity>
                        :props.scene?.descriptor.options.arrowBack ?  <Image source={transparent} style={{width: 27, height: 27}}/>
                   : <MaterialIcons name='search' size={35} onPress={() => fetchRestaurants()} style={styles.icon}/>
                    }
                </View>
            </LinearGradient>
            {searchShow && <View style={styles.searchQuery}>
                <SearchQuery search={fetchRestaurants} searchShow={searchShow} filterData={filterData}/>
            </View>}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F16708',
        alignItems: 'flex-end',
        elevation:10,
        zIndex:3,
    },
    background: {
        width: '100%',
        height: 80,
        marginTop: 32,
    },
    header: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },

    search: {
        width: '70%',
        height: 60,
        fontSize: 20,
        color: '#fff',
        paddingHorizontal: 20,
        backgroundColor: '#f8a21d2b',

    },
    headerText: {
        color: '#fff',
        fontSize: 26,
        letterSpacing: 1,
    },
    icon: {
        backgroundColor: 'transparent',
        color: '#fff'
    },
    iconImg: {
        width: 30,
        height: 30
    },
    searchQuery: {
        width: '100%',
        height: '60%'

    }
})
