import {restaurantsApi} from "../../api/api";

const  FETCH_RESTAURANT_FILTER_DATA = 'FETCH_RESTAURANT_FILTER_DATA';
const  FETCH_RESTAURANT_FILTER_SUCCESS = 'FETCH_RESTAURANT_FILTER_SUCCESS';
const  FETCH_RESTAURANT_FILTER_ERROR = 'FETCH_RESTAURANT_FILTER_ERROR';
//My Code
const  GET_RESTAURANT_DATA = 'GET_RESTAURANT_DATA';
const  GET_RESTAURANT_DATA_SUCCESS = 'GET_RESTAURANT_DATA_SUCCESS';
const  GET_RESTAURANT_DATA_ERROR = 'GET_RESTAURANT_DATA_ERROR';
const  CHANGE_SELECTED_CITY = 'CHANGE_SELECTED_CITY';
//End

let initialState = {
    latitude:40.2862004973,
    longitude:44.9473915019,
    restaurant:[],
    error:null,
    loading:false,
    selectedCity:'Выбрать город',
};

export const restaurantFilterReducer = (state = initialState, action) =>{
    //console.log(state.restaurant,5555);
    switch (action.type) {

        case FETCH_RESTAURANT_FILTER_DATA:
            return {error: null, loading: true};
        case FETCH_RESTAURANT_FILTER_SUCCESS:
             return {error: null,loading: false,
                 restaurant:action.payload.Restaurant,
                 latitude:action.latitude,
                 longitude:action.longitude};
        case FETCH_RESTAURANT_FILTER_ERROR:
            return {error: true,loading: false};
        //My code
        case GET_RESTAURANT_DATA:
            return {...state,error: null, loading: true};
        case GET_RESTAURANT_DATA_SUCCESS:
             return {...state,error: null,loading: false, restaurant:action.payload.Restaurant};
        case GET_RESTAURANT_DATA_ERROR:
            return {...state,error: true,loading: false}
        case CHANGE_SELECTED_CITY:
            return {...state,selectedCity:action.payload}
        //End
            

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

//Filter by cityName
//My code

//Send response only with city name
export const fetchFilterRestoransWithCityName = (cityName) => async (dispatch) => {
    try {
        dispatch({type:GET_RESTAURANT_DATA})
         const {data} = await restaurantsApi.getFilterWithCity(cityName)
         //console.log(data)
         dispatch({type:GET_RESTAURANT_DATA_SUCCESS, payload:data})
    }catch (e) {
        dispatch({type:GET_RESTAURANT_DATA_ERROR})
    }
}

//send response only categories name
export const fetchFilterRestoransWithCategorys = (categoryName, cityName) => async (dispatch) => {
    console.log(cityName === 'Выбрать город');
    try {
        dispatch({type:GET_RESTAURANT_DATA})
        if(cityName === 'Выбрать город'){
            const {data} = await restaurantsApi.getFilterWithCategory(categoryName)
            dispatch({type:GET_RESTAURANT_DATA_SUCCESS, payload:data})
            console.log(data, 'qaxaqov');
        }else{
            const {data} = await restaurantsApi.getFilterWithCityAndCategory(categoryName, cityName)
            dispatch({type:GET_RESTAURANT_DATA_SUCCESS, payload:data})
            console.log(data, 'arandz qaxaqi');
        }
    }catch (e) {
        dispatch({type:GET_RESTAURANT_DATA_ERROR})
    }
}

//End

export const getRestaurantsCategory = (category) => async (dispatch) => {
    try {
        dispatch({type:GET_RESTAURANT_DATA})
         const response = category

         dispatch({type:GET_RESTAURANT_DATA_SUCCESS, payload:response})
    }catch (e) {
        dispatch({type:GET_RESTAURANT_DATA_ERROR})
    }
}

export const changeSelectedCity = (payload) =>({type:CHANGE_SELECTED_CITY,payload})



