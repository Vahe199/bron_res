import React, {useRef, useState} from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    Animated,
    View,
    useWindowDimensions,
    ScrollView, ImageBackground
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import Splash from "../../../Utils/Splash";
import {TableItem} from "./TableItem";
import {fetchRoomItem} from "../../../../redux/action/individualrestaurant_action_&_reducer";


export const RoomItem = (props) => {
    const dispatch = useDispatch()
const {Restaurant,loading} = useSelector(state => state.individualPage);
    const width = useWindowDimensions().width;
    const oneRenderItem = ({item}) => {
        return (
            <ScrollView   showsVerticalScrollIndicator={false}
                          showsHorizontalScrollIndicator={false}
                          contentContainerStyle={{paddingVertical:50}}>
      <View style={[styles.container,{width}]}>
          <View  style={[styles.tableItem,{width:width-30}]}>
           <TableItem {...props} data={item.data} table_x={item.table_x} background_img={item.background_img}/>
          </View>
          <Text style={styles.title}>{item.hall_name}</Text>
          <Text style={styles.text} >{item.description}</Text>
      </View>
            </ScrollView>
        )
    }
    const [currentIndex,setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef()
    const viewableItemsChanged = useRef( ({viewableItems})=>{
         dispatch(fetchRoomItem(viewableItems[0].item))
        setCurrentIndex(viewableItems[0].index)

    }).current
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    return (
        loading ? <Splash/>:
        <View>
            <View style={styles.view}>

                <FlatList horizontal
                           pagingEnabled
                          bounces={false}
                          showsHorizontalScrollIndicator={false}
                          data={Restaurant}
                          keyExtractor={(item, index) => index.toString()}
                          onScroll={Animated.event([{nativeEvent:{contentOffset:{x: scrollX}}}],
                              {useNativeDriver:false})}
                          onViewableItemsChanged={viewableItemsChanged}
                         viewabilityConfig={viewConfigRef}
                          renderItem={oneRenderItem}
                ref={slidesRef}/>
                <View style={{flexDirection:'row',marginTop:5}}>
                {Restaurant?.map((item,i)=>
                    <View style={i==currentIndex?styles.room:styles.rooms} key={i}/>
                )}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
       flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tableItem:{
        flex:0.7,
        alignItems:'center',
        justifyContent:'center',
        height: 250,
        resizeMode:'contain'
    },
    room:{
        marginHorizontal:5,
        width: 10,
        height:10,
        backgroundColor: '#96a8b0',
        borderRadius:25

    },
    rooms:{
        marginHorizontal:5,
        width: 10,
        height:10,
        borderRadius:25,
        borderWidth:1.5,
        borderColor:'#96a8b0',
        backgroundColor: '#fff',

    },
    title:{
        fontWeight:'800',
        fontSize:24,
        marginBottom:10,
        color: '#000',
    },
    text: {
        fontWeight:'300',
        color:'#62656b',
        paddingHorizontal: 20,
    },
    tableRows:{
        color:'#000',
        backgroundColor:'#f08000',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    }
})
