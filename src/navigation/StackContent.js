import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ContactUsScreen from "../components/Drawer/ContactUsScreen";
import AboutScreen from "../components/Drawer/AboutScreen";
import MapsScreen from "../components/RestaurantPage/Maps";
import SupportScreen from "../components/Drawer/Sopport/SupportScreen";
import {Header} from "../components/Utils/Header";
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

const StackContent = (props) => (
    <Stack.Navigator headerMode="screen" screenOptions={{

        header:(props)=><Header {...props}/>,
        headerStyle: {
            backgroundColor: '#f16708',
            height: 100
        }
    }}>
        <Stack.Screen name={"Рестораны"} component={RestaurantsScreen}/>
        <Stack.Screen name={"Индивидуальный рест"} component={IndividualRestaurantPage}
                      options={{  arrowBack:true,call:true}}/>
        <Stack.Screen name={"Таблица бронирования"}  options={{  arrowBack:true, call:true}}
                      component={TableReservationPage}/>
        <Stack.Screen name={"Подтверждение"} component={Confirmation}
                      options={{ arrowBack:true}}/>
        <Stack.Screen name={"Рядом со мной"} component={NearMe}/>
        <Stack.Screen name={"Категория"} component={CategoryScreen}/>
        <Stack.Screen name={"Рядом Со мной"} component={MapsScreen} />
        <Stack.Screen name={"О нас"}
                      options={{arrowBack:true}} component={AboutScreen}/>
        <Stack.Screen name={'Поддержка'}
                      options={{arrowBack:true}} component={SupportScreen}/>
        <Stack.Screen name={'Сообщение'}
                      options={{arrowBack:true}} component={Form}/>
        <Stack.Screen name={'Свяжитесь с нами'}
                      options={{arrowBack:true}} component={ContactUsScreen}/>
        <Stack.Screen name={'Правила пользования'}
                      options={{arrowBack:true}} component={TermsOfUseScreen}/>
    </Stack.Navigator>
)

export default StackContent;

