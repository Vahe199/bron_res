
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import {topPageReducer} from "./action/top_restaurant_action_&_reducer";
import {individualRestaurantReducer} from "./action/individualrestaurant_action_&_reducer";
import {reservationReducer} from "./action/reservation_action_&_reducer";
import {restaurantFilterReducer} from "./action/restaurant_filter_action_&_reducer";





const reducer = combineReducers({
    topPage:topPageReducer,
    individualPage:individualRestaurantReducer,
    reservation:reservationReducer,
    filter:restaurantFilterReducer

});


export const store= createStore(reducer,applyMiddleware(thunk))
