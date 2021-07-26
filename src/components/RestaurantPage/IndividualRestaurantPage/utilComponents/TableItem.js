import React, {useRef, useState} from "react";
import {
    StyleSheet,
    Text,

    View,
    useWindowDimensions,
    ScrollView, ImageBackground, TouchableOpacity
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {Cell, Rows, Table, TableWrapper} from "react-native-table-component";
import {Image} from "react-native-elements";
import P8 from "../../../../../assets/images/table/p8.png";
import P6 from "../../../../../assets/images/table/p6.png";
import P3 from "../../../../../assets/images/table/p3.png";
import P4 from "../../../../../assets/images/table/p4.png";
import trans from "../../../../../assets/images/table/transparent.png";
export const TableItem = ({navigation,item}) => {
    const {width, height} = useWindowDimensions();
    const [isBusyTable , setIsBusyTable] = React.useState(false)
    const choseTable = (data) => {
        console.log(data)
        // props.navigation.push('Reservation Table',`Table ${data}`);
        if(isBusyTable) {
            setIsBusyTable(false)
        }else {
            setIsBusyTable(true)
        }
    }
    // let imgSrc = data==='8'?P8:data==='6'?P6:data==='3'?P3:data==='4'?P4:trans
        const element = (data, index) => (
            <TouchableOpacity onPress={() =>choseTable(data)} activeOpacity={0.8} >
                <Image
                    source={data==='8'?P8:data==='6'?P6:data==='3'?P3:data==='4'?P4:trans}
                    style={styles.imgTable}>
                    <Text style={styles. textTable}>{data==='3'?3:data==='4'?4:data==='6'?6:data==='8'?8:''}</Text>
                </Image >
            </TouchableOpacity>
        );
    return (
        <View>

            <Table style={{width:width-75, height: 200}}>
                {
                    item.table.map((rowData, index) => (
                        <TableWrapper key={index} style={styles.wrapper}>
                            {
                                rowData.map((cellData, cellIndex) => (
                                    <Cell key={cellIndex} data={element(cellData, index) }
                                          style={[styles.cell,{height: 200 / 5, width:(width-75)/5}]} />
                                ))
                            }
                        </TableWrapper>
                    ))
                }
            </Table>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cell:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgTable: {
        width:40,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center' ,
    },
    textTable: { textAlign: 'center',
        color: '#000',fontSize:18
    }
})