import React from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Table,Cell,TableWrapper} from "@deb-95/react-native-table-component";
import A3 from "../../../../assets/images/table/a3.png";
import A4 from "../../../../assets/images/table/a4.png";
import A6 from "../../../../assets/images/table/a6.png";
import A8 from "../../../../assets/images/table/a8.png";
import P3 from "../../../../assets/images/table/p3.png"
import P4 from "../../../../assets/images/table/p4.png"
import P6 from "../../../../assets/images/table/p6.png"
import P8 from "../../../../assets/images/table/p8.png"
import trans from "../../../../assets/images/table/transparent.png"
import {Image} from "react-native-elements";
export const LayoutTable = (props) => {
    const [isBusyTable , setIsBusyTable] = React.useState(false)
    const  table = {
        tableData: [
            ['3', '4', '', '8','6'],
            ['', '6', '4', '8','4'],
            ['4', '3', '6', '8','8'],
            ['4', '', '', '8','4'],
            ['4', '', '', '','6'],

        ]
    }
    // let imgSrc = data==='8'?table.img[4]:data==='6'?table.img[2]:data==='3'?table.img[5]:data==='4'?table.img[3]:table.img[6]
    // source={require(`../../../../assets/images/table/${imgSrc}`)}
    const choseTable = (data) => {
            props.navigation.push('Reservation Table',`Table ${data}`);
            if(isBusyTable) {
                setIsBusyTable(false)
            }else {
                setIsBusyTable(true)
            }
    }
    const element = (data, index) => {
        let imgSrc = data==='8'?P8:data==='6'?P6:data==='3'?P3:data==='4'?P4:trans
      return(<View>
              <TouchableOpacity onPress={() =>choseTable(data)} activeOpacity={0.6}>
                  <Image
                      source={imgSrc}
                      style={styles.imgTable}>
                <Text style={styles.text}>{data==='3'?3:data==='4'?4:data==='6'?6:data==='8'?8:''}</Text>
            </Image >
        </TouchableOpacity>
          </View>
      )
    };
    return(  <View style={styles.container}>
        <ImageBackground resizeMode="stretch"
                         source={require('../../../../assets/images/table/maket.jpg')} style={styles.image}>
        <Table style={styles.tableStyle}>
            {
                table.tableData.map((rowData, index) => (
                    <TableWrapper key={index} style={styles.row}>
                        {
                            rowData.map((cellData, cellIndex) => (
                                <Cell key={cellIndex}
                                      data={element(cellData, index) }/>
                            ))
                        }
                    </TableWrapper>
                ))
            }
        </Table>
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
        width:'100%',
        height:'100%',
         flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    tableStyle:{
        width:'90%',
        height:'75%',
        paddingHorizontal:20,
        paddingVertical:7
    },
    row: { flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems:'center',
        justifyContent:'space-between',

    },
    imgTable: {
        width:50,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center' ,
    },
   text: { textAlign: 'center', color: '#000',fontSize:18 }
});