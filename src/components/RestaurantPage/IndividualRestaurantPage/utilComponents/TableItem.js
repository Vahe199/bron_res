import React from "react";
import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {Image} from "react-native-elements";
import {BACKGROUND_IMG_URL,TABLE_IMG_URL} from "@env"

export const TableItem = ({data,table_x,table_y, background_img,setTableId,tableId}) => {
    let width = useWindowDimensions().width;

    const choseTable = (id) => {
        setTableId(id)
        // props.navigation.push('Reservation Table',`Table ${data}`);
    }


    return(  <View style={styles.container}>
        <ImageBackground resizeMode="stretch"
                         source={{ uri:`${BACKGROUND_IMG_URL}${background_img}`}} style={styles.image}>
            <View style={[{width:width-50},styles.tableStyle]}>
                <FlatList numColumns={table_x}
                          showsVerticalScrollIndicator={false}
                          data={data} keyExtractor={(item, index) => index.toString()}
                          renderItem={({item}) => (
                              <View style={{margin:5 ,height:250/table_y, width:width/2/(table_x+1)}}>
                                  <TouchableOpacity onPress={() =>choseTable(item.id)} activeOpacity={0.6}>
                                      <View style={item.img && tableId == item.id ? styles.res:''}>
                                          <Image
                                              // source={data.img?data.img:trans}
                                              source={{ uri:`${TABLE_IMG_URL}${item.img}`}}
                                              style={[{width:width/2/(table_x+1)},styles.imgTable]}>

                                              <Text style={styles.text}>{item.quantity_chair}</Text>

                                          </Image >
                                      </View>
                                  </TouchableOpacity>
                              </View>
                          )}/>
            </View>
        </ImageBackground>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    image: {
        height: 250,
        resizeMode:'contain',
        alignItems:'center',
        justifyContent:'space-between'
    },
    tableStyle:{
        paddingHorizontal:20,
        paddingVertical:7,
    },
    row: { flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems:'center',
        justifyContent:'space-between',
    },
    cell:{
        padding:5,
        alignItems:'center',
        justifyContent:'center',
    },
    imgTable: {
        alignItems: 'center',
        justifyContent: 'center' ,
    },
    res:{
        backgroundColor:'#FAB023',
    },
    text: { textAlign: 'center', color: '#000',fontSize:18 }
});
