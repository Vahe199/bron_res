import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ContactUsScreen from "../components/Drawer/ContactUsScreen";
import AboutScreen from "../components/Drawer/AboutScreen";
import MapsScreen from "../components/RestaurantPage/Maps";
import SupportScreen from "../components/Drawer/Sopport/SupportScreen";
import {Header} from "../components/Include/Header";
import RestaurantsScreen from "../components/RestaurantPage/RestaurantsScreen";
import NearMe from "../components/RestaurantPage/NearMe";
import CategoryScreen from "../components/Category/CategoryScreen";
import {Form} from "../components/Drawer/Sopport/messages";
import {
    TableReservationPage
} from "../components/RestaurantPage/IndividualRestaurantPage/TableReservationPage";
import {Confirmation} from "../components/RestaurantPage/IndividualRestaurantPage/Confirmation";
import {IndividualRestaurantPage} from "../components/RestaurantPage/IndividualRestaurantPage/IndividualRestaurantPage ";
import TermsOfUseScreen from "../components/Drawer/TermsOfUseScreen";
const Stack = createStackNavigator();


const StackContent = ({navigation,route}) => (
    <Stack.Navigator headerMode="screen" screenOptions={{

        header:(props)=><Header {...props}/>,
        headerStyle: {
            backgroundColor: '#f16708',
            height: 100
        }
    }}>
        <Stack.Screen name={"Restaurants"} component={RestaurantsScreen}/>
        <Stack.Screen name={"Individual Rest"} component={IndividualRestaurantPage}
                      options={{headerShown: false,
                          header: null}}/>
        <Stack.Screen name={"Reservation Table"} component={TableReservationPage}
                      options={{headerShown: false}}/>
        <Stack.Screen name={"Confirmation"} component={Confirmation}
                      options={{headerShown: false}}/>
        <Stack.Screen name={'Support'} component={SupportScreen}/>
        <Stack.Screen name={'Terms of use'} component={TermsOfUseScreen}/>
        <Stack.Screen name={'Contact us'} component={ContactUsScreen}/>
        <Stack.Screen name={'Message'} component={Form}/>
        <Stack.Screen name={"About us"} component={AboutScreen}/>
        <Stack.Screen name={"Near me"} component={NearMe}/>
        <Stack.Screen name={"Category"} component={CategoryScreen}
                      options={{headerShown: false}}/>
        <Stack.Screen name={"Near Me"} component={MapsScreen} />
    </Stack.Navigator>
)

export default StackContent;

