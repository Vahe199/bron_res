import {restaurantsApi} from "../../api/api";

const  FETCH_RESTAURANT_FILTER_DATA = 'FETCH_RESTAURANT_FILTER_DATA';
const  FETCH_RESTAURANT_FILTER_SUCCESS = 'FETCH_RESTAURANT_FILTER_SUCCESS';
const  FETCH_RESTAURANT_FILTER_ERROR = 'FETCH_RESTAURANT_FILTER_ERROR';

let initialState = {
    latitude:40.2862004973,
    longitude:44.9473915019,
    restaurant:[],
    error:null,
    loading:false
};

export const restaurantFilterReducer = (state = initialState, action) =>{
    switch (action.type) {

        case FETCH_RESTAURANT_FILTER_DATA:
            return {error: null, loading: true};
        case FETCH_RESTAURANT_FILTER_SUCCESS:
             return {error: null,loading: false,
                 restaurant:action.payload.Restaurant,
                 latitude:action.latitude,
                 longitude:action.longitude};
        case FETCH_RESTAURANT_FILTER_ERROR:
            return {error: true,loading: false}

        default:return state;
    }

}

export const fetchRestaurantsFilterData = (latitude,longitude) => async (dispatch) => {
        try {
            dispatch({type:FETCH_RESTAURANT_FILTER_DATA})
             const {data} = await restaurantsApi.fetchRestaurantsNearMe(latitude,longitude)
             dispatch({type:FETCH_RESTAURANT_FILTER_SUCCESS, payload:data,latitude:latitude,longitude:longitude})
        }catch (e) {
            dispatch({type:FETCH_RESTAURANT_FILTER_ERROR})
        }
}
