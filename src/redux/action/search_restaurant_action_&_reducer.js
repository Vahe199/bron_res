import {restaurantsApi} from "../../api/api";

const  GET_RESTAURANT_FILTER_DATA = 'GET_RESTAURANT_FILTER_DATA';
const  GET_RESTAURANT_FILTER_SUCCESS = 'GET_RESTAURANT_FILTER_SUCCESS';
const  GET_RESTAURANT_FILTER_ERROR = 'FETCH_RESTAURANT_FILTER_ERROR';



let initialState = {
    searchRestaurants: [],
    error: null,
    loading: false,
    test: [
        // {
        //     restaurant_name: '15484484',
        //     address: '44828'
        // },
        // {
        //     restaurant_name: '1548dcdx4484',
        //     address: '4482cvdvd8'
        // },
        // {
        //     restaurant_name: '1548fbvx4484',
        //     address: 'sdasac'
        // },
        // {
        //     restaurant_name: 'acsad',
        //     address: 'cassc'
        // }
    ]
};

export const searchRestaurantsReducer = (state = initialState, action) => {
    //console.log(state.searchRestaurants);
    switch (action.type) {
        case GET_RESTAURANT_FILTER_DATA:
            return {error: null, loading: true};
        case GET_RESTAURANT_FILTER_SUCCESS:
             return {error: null, loading: false,
                searchRestaurants: action.payload.Restaurant};
        case GET_RESTAURANT_FILTER_ERROR:
            return {error: true, loading: false}

        default: return state;
    }
}



//  Search restaurants with search TextInput
export const getRestaurantsWithSearch = (text) => async (dispatch) =>{
    try {
        dispatch({type:GET_RESTAURANT_FILTER_DATA})
        const {data} = await restaurantsApi.fetchRestaurantsWithSearch(text)
        //console.log(data)
        dispatch({type:GET_RESTAURANT_FILTER_SUCCESS,payload:data})
    }catch (e) {
        dispatch({type:GET_RESTAURANT_FILTER_ERROR})
    }
}


