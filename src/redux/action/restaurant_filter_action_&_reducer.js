import {restaurantsApi} from "../../api/api";

const  FETCH_RESTAURANT_FILTER_DATA = 'FETCH_RESTAURANT_FILTER_DATA';
const  FETCH_RESTAURANT_FILTER_SUCCESS = 'FETCH_RESTAURANT_FILTER_SUCCESS';
const  FETCH_RESTAURANT_FILTER_ERROR = 'FETCH_RESTAURANT_FILTER_ERROR';

const  FETCH_RESTAURANT_CITY_FILTER_SUCCESS = 'FETCH_RESTAURANT_CITY_FILTER_SUCCESS';
const  FETCH_RESTAURANT_CATEGORY_FILTER_SUCCESS = 'FETCH_RESTAURANT_CATEGORY_FILTER_SUCCESS';
const  FETCH_RESTAURANT_CATEGORY_AND_CITY_FILTER_SUCCESS = 'FETCH_RESTAURANT_CATEGORY_AND_CITY_FILTER_SUCCESS';

let initialState = {
    latitude:40.2862004973,
    longitude:44.9473915019,
    restaurant:[],
    selectedCategory:'',
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
             case FETCH_RESTAURANT_CITY_FILTER_SUCCESS:
             return { ...state,
                 error: null,loading: false,
                 restaurant:action.payload.Restaurant,
                };
             case FETCH_RESTAURANT_CATEGORY_FILTER_SUCCESS:
             return { ...state,
                 error: null,loading: false,
                 restaurant:action.payload.Restaurant,
                 selectedCategory:action.category
                };
             case FETCH_RESTAURANT_CATEGORY_AND_CITY_FILTER_SUCCESS:
             return { ...state,
                 error: null,loading: false,
                 restaurant:action.payload.Restaurant,
                 selectedCategory:action.category
                };
        case FETCH_RESTAURANT_FILTER_ERROR:
            return {error: true,loading: false}

        default:return state;
    }

}

//  Filter restaurants with GEOLOCATION
export const fetchRestaurantsFilterData = (latitude,longitude) => async (dispatch) => {
        try {
            dispatch({type:FETCH_RESTAURANT_FILTER_DATA})
             const {data} = await restaurantsApi.fetchRestaurantsNearMe(latitude,longitude)
             dispatch({type:FETCH_RESTAURANT_FILTER_SUCCESS, payload:data,latitude:latitude,longitude:longitude})
        }catch (e) {
            dispatch({type:FETCH_RESTAURANT_FILTER_ERROR})
        }
}

//  Filter restaurants with the help of CITIES
export const fetchCityFilterRestaurantsData = (city) => async (dispatch) =>{
    try {
        dispatch({type:FETCH_RESTAURANT_FILTER_DATA})
        const {data} = await restaurantsApi.fetchCityRestaurants(city)
        dispatch({type:FETCH_RESTAURANT_CITY_FILTER_SUCCESS,payload:data})
    }catch (e) {
        dispatch({type:FETCH_RESTAURANT_FILTER_ERROR})
    }
}

// Filter restaurants by  CATEGORIES
export const fetchCategoryFilterRestaurantsData = (category) => async (dispatch) =>{
    try {
        dispatch({type:FETCH_RESTAURANT_FILTER_DATA})
        const {data} = await restaurantsApi.fetchCategoryRestaurants(category)
        dispatch({type:FETCH_RESTAURANT_CATEGORY_FILTER_SUCCESS,payload:data,category:category})
    }catch (e) {
        dispatch({type:FETCH_RESTAURANT_FILTER_ERROR})
    }
}

// Filtering restaurants by categories and cities
export const fetchCategoryAndCityFilterRestaurantsData = (category,city) => async (dispatch) =>{
    try {
        dispatch({type:FETCH_RESTAURANT_FILTER_DATA})
        const {data} = await restaurantsApi.fetchCategoryAndCityRestaurants(category,city)
        dispatch({type:FETCH_RESTAURANT_CATEGORY_AND_CITY_FILTER_SUCCESS,payload:data,category:category})
    }catch (e) {
        dispatch({type:FETCH_RESTAURANT_FILTER_ERROR})
    }
}
