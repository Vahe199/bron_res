import axios from "axios";
import RestaurantsScreen from "../components/RestaurantPage/RestaurantsScreen";
import {individualRestaurantReducer} from "../redux/action/individualrestaurant-action";


const instance = axios.create(
    {
        baseURL: "https://restoran.fab.nu/",
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    })


export const restaurantsApi = {

    topRestaurants() {
        return instance.get('homes')
    },
    getIndividualRestData(id){
        return instance.get(`restoran/${id}`)
    }
}