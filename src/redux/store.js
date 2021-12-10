
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import {topPageReducer} from "./action/top_restaurant_action_&_reducer";
import {restaurantReducer} from "./action/restaurant_action_&_reducer";
import {individualRestaurantReducer} from "./action/individualrestaurant_action_&_reducer";
import {reservationReducer} from "./action/reservation_action_&_reducer";
import {restaurantFilterReducer} from "./action/restaurant_filter_action_&_reducer";
import {searchRestaurantsReducer} from "./action/search_restaurant_action_&_reducer";
import { sendSupportDataReducer } from "./action/support_action_&_reducer";




const reducer = combineReducers({
    topPage:topPageReducer,
    restaurantPage:restaurantReducer,
    individualPage:individualRestaurantReducer,
    reservation:reservationReducer,
    nearMe:restaurantFilterReducer,
    search: searchRestaurantsReducer,
    support: sendSupportDataReducer
});


export const store= createStore(reducer,applyMiddleware(thunk))
