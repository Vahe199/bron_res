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
        <Stack.Screen name={"Рестораны"} component={RestaurantsScreen}/>
        <Stack.Screen name={"Индивидуальный рест"} component={IndividualRestaurantPage}
                      options={{headerShown: false,
                          header: null}}/>
        <Stack.Screen name={"Таблица бронирования"} component={TableReservationPage}
                      options={{headerShown: false}}/>
        <Stack.Screen name={"Подтверждение"} component={Confirmation}
                      options={{headerShown: false}}/>
        <Stack.Screen name={"Рядом со мной"} component={NearMe}/>
        <Stack.Screen name={"Категория"} component={CategoryScreen}
                      options={{headerShown: false}}/>
        <Stack.Screen name={"Рядом Со мной"} component={MapsScreen} />
        <Stack.Screen name={"О нас"}  options={{ title:'О нас' }} component={AboutScreen}/>
        <Stack.Screen name={'Поддержка'} options={{ title: 'Поддержка' }} component={SupportScreen}/>
        <Stack.Screen name={'Сообщение'} options={{ title: 'Сообщение' }} component={Form}/>
        <Stack.Screen name={'Свяжитесь с нами'} options={{ title: 'Свяжитесь с нами' }} component={ContactUsScreen}/>
        <Stack.Screen name={'Правила пользования'} options={{ title: 'Правила пользования' }} component={TermsOfUseScreen}/>
    </Stack.Navigator>
)

export default StackContent;

