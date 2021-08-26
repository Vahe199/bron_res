import axios from "axios";
import {restaurantsApi} from "../../api/api";

const  FETCH_HOMEPAGE_DATA = 'FETCH_HOMEPAGE_DATA';
const  FETCH_HOMEPAGE_DATA_SUCCESS = 'FETCH_HOMEPAGE_DATA_SUCCESS';
const  FETCH_HOMEPAGE_DATA_ERROR = 'FETCH_HOMEPAGE_DATA_ERROR';
const  CHANGE_SELECTED_CITY = 'CHANGE_SELECTED_CITY';

let initialState = {
     category: [],
    cities:[],
    topRest:[],
    selectedCity:'Выбрать город',
    error:null,
    loading:false
};

export const topPageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_HOMEPAGE_DATA:
            return {...state,error: null, loading: true};
        case FETCH_HOMEPAGE_DATA_SUCCESS:
             return {...state,error: null,loading: false,
                 cities:action.payload.City,
                 category:action.payload.Restaurant_catigory,
                 topRest:action.payload.Restaurant_top};
        case FETCH_HOMEPAGE_DATA_ERROR:
            return {error: true,loading: false};
        case CHANGE_SELECTED_CITY:
            return {...state,selectedCity:action.payload}

        default:return state;
    }

}

export const changeSelectedCity = (payload) =>({type:CHANGE_SELECTED_CITY,payload})
export const fetchTopPageData = () => async (dispatch) => {
    try {
        dispatch({type:FETCH_HOMEPAGE_DATA})
        const {data} = await restaurantsApi.topRestaurants()
       dispatch({type:FETCH_HOMEPAGE_DATA_SUCCESS, payload:data})
    }catch (e) {
        dispatch({type:FETCH_HOMEPAGE_DATA_ERROR})
    }
}
