import React from "react";
import {ActivityIndicator, Text, View} from "react-native";

const Splash = ({navigation}) => {

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Загрузка ...</Text>
            <ActivityIndicator size="small" color="#FAB023" />
        </View>
    )
}


export default Splash;