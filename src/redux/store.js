
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import {topPageReducer} from "./action/topRestaurant-action";
import {restaurantReducer} from "./action/restaurant-action";





const reducer = combineReducers({
    topPage:topPageReducer,
    restaurantPage:restaurantReducer

});


export const store= createStore(reducer,applyMiddleware(thunk))