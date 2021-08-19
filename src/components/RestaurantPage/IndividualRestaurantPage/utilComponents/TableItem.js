import React from "react";
import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {Table,Cell,TableWrapper} from "@deb-95/react-native-table-component";
import table3 from "../../../../../assets/images/table/table3.png"
import table4 from "../../../../../assets/images/table/table4.png"
import table6 from "../../../../../assets/images/table/table6.png"
import table8 from "../../../../../assets/images/table/table8.png"
import {Image} from "react-native-elements";
import {useSelector} from "react-redux";
import {DataTable} from "react-native-paper";
import CardItem from "../../../Category/CardItem";
import {BACKGROUND_IMG_URL,TABLE_IMG_URL} from "@env"

export const TableItem = ({data,table_x, background_img}) => {
    let width = useWindowDimensions().width;
    //  const  table = [
    // {id:1,chair:3,img:table3,x:1,y:1}, {id:2,chair:4,img:table4,x:1,y:2}, {}, {id:3,chair:8,img:table8,x:1,y:4},{id:4,chair:6,img:table6,x:1,y:5 },
    //          {}, {id:5,chair:6,img:table6,x:2,y:2}, {id:6,chair:4,img:table4,x:2,y:3}, {},{id:8,chair:8,img:table8,x:2,y:5},
    //   {id:18,chair:4,img:table4,x:3,y:1}, {id:9,chair:3,img:table3,x:3,y:2}, {id:10,chair:6,img:table6,x:3,y:3}, {id:11,chair:8,img:table8,x:3,y:4},{id:12,chair:8,img:table8,x:3,y:5},
    //   {id:13,chair:4,img:table4,x:4,y:1}, {}, {}, {id:14,chair:6,img:table6,x:4,y:4},{id:15,chair:4,img:table4,x:4,y:5},
    //   {id:16,chair:4,img:table4,x:5,y:1}, {}, {}, {},{id:17,chair:6,img:table6,x:5,y:5}
    //
    //      ]

    const [tableId, setTableId] = React.useState('')
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
                              <View style={{padding:10}}>
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
        padding: 0
    },
    text: { textAlign: 'center', color: '#000',fontSize:18 }
});
