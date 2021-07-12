import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import arrowBack from "../../../assets/images/Back.png"
import {SearchQuery} from "./SearchQuery";

export const Header = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchShow, setSearchShow] = React.useState(false);
    const [filterData, setFilterData] = React.useState([]);
    const [masterData, setMasterData] = React.useState([]);
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
                colors={['#f16909', '#f9a61f']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.background}>
                <View style={styles.header}>
                    {props.title ? <TouchableOpacity onPress={() => props.navigation.goBack()} activeOpacity={0.5}>
                            <Image source={arrowBack} style={styles.iconImg}/>
                        </TouchableOpacity>
                        : <MaterialIcons name='menu' size={35} onPress={() => props.navigation.openDrawer()}
                                         style={styles.icon}/>}
                    {searchShow ? <TextInput style={styles.search}
                                             placeholder="Search"
                                             onChangeText={searchFilter}
                                             value={searchQuery}
                    /> : <Text style={styles.headerText}>{props.title ? props.title : props.scene.route.name}</Text>}
                    <MaterialIcons name='search' size={35} onPress={() => fetchRestaurants()} style={styles.icon}/>
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
        backgroundColor: '#f16708',
        alignItems: 'flex-end',
        elevation:10,
        zIndex:2,
        display:'flex'
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
        fontSize: 22,
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