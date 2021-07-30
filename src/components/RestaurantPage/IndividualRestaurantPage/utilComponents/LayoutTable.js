import React from "react";
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Table,Cell,TableWrapper} from "@deb-95/react-native-table-component";
import A3 from "../../../../../assets/images/table/a3.png";
import A4 from "../../../../../assets/images/table/a4.png";
import A6 from "../../../../../assets/images/table/a6.png";
import A8 from "../../../../../assets/images/table/a8.png";
import P3 from "../../../../../assets/images/table/p3.png"
import P4 from "../../../../../assets/images/table/p4.png"
import P6 from "../../../../../assets/images/table/p6.png"
import P8 from "../../../../../assets/images/table/p8.png"
import trans from "../../../../../assets/images/table/transparent.png"
import tab from "../../../../../assets/table.png"
import {Image} from "react-native-elements";


export const LayoutTable = (props) => {
    const [isBusyTable , setIsBusyTable] = React.useState(false)
    const  table = {
        tableData: [
   [ {id:1,chair:3,img:P3,x:1,y:1}, {id:2,chair:4,img:P4,x:1,y:2}, '', {id:3,chair:8,img: P8,x:1,y:4},{id:4,chair:6,img: P6,x:1,y:5 }],
    [ '', {id:5,chair:6,img:P6,x:2,y:2}, {id:6,chair:4,img:P4,x:2,y:3}, {id:7,chair:8,img: P8,x:2,y:4},{id:8,chair:8,img: P8,x:2,y:5}],
     [{id:18,chair:4,img:P4,x:3,y:1}, {id:9,chair:3,img:P3,x:3,y:2}, {id:10,chair:6,img:P6,x:3,y:3}, {id:11,chair:8,img: P8,x:3,y:4},{id:12,chair:8,img: A8,x:3,y:5}],
     [{id:13,chair:4,img:P4,x:4,y:1}, '', '', {id:14,chair:8,img: P8,x:4,y:4},{id:15,chair:4,img:P4,x:4,y:5}],
     [{id:16,chair:4,img:P4,x:5,y:1}, '', '', '',{id:17,chair:6,img:P6,x:5,y:5}]

        ]
    }
    const [res, setRes] = React.useState('')
    // let imgSrc = data==='8'?table.img[4]:data==='6'?table.img[2]:data==='3'?table.img[5]:data==='4'?table.img[3]:table.img[6]
    // source={require(`../../../../assets/images/table/${imgSrc}`)}
    const choseTable = (data) => {
        setRes(data.id)
            // props.navigation.push('Таблица бронирования',`Стол  ${data}`);
            // if(isBusyTable) {
            //     setIsBusyTable(false)
            // }else {
            //     setIsBusyTable(true)
            // }
    }
    const element = (data, index) => {

      return(<View>
              <TouchableOpacity onPress={() =>choseTable(data)} activeOpacity={0.6}>
                  <View style={res==data.id?styles.res:''}>
                  <Image
                      // source={data.img?data.img:trans}
                      source={data.img?tab:trans}
                      style={styles.imgTable}>

                <Text style={styles.text}>{data.chair}</Text>

            </Image >
                  </View>
        </TouchableOpacity>
          </View>
      )
    };
    debugger
    return(  <View style={styles.container}>
        <ImageBackground resizeMode="stretch"
                         source={require('../../../../../assets/images/table/maket.jpg')} style={styles.image}>
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
        width:30,
        height: 30,
        // backgroundColor:"#FAB023",
        alignItems: 'center',
        justifyContent: 'center' ,
    },
    res:{
        backgroundColor:'#FAB023',
        width:30,height:30,
        borderRadius:15 ,
        alignItems:'center',
        justifyContent:'center'
    },
   text: { textAlign: 'center', color: '#000',fontSize:18 }
});