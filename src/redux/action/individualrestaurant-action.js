import {restaurantsApi} from "../../api/api";

const  FETCH_RESTAURANT_ROOM_DATA = 'FETCH_RESTAURANT_ROOM_DATA';
const  FETCH_RESTAURANT_ROOM_DATA_SUCCESS = 'FETCH_RESTAURANT_ROOM_DATA_SUCCESS';
const  FETCH_RESTAURANT_ROOM_DATA_ERROR = 'FETCH_RESTAURANT_ROOM_DATA_ERROR';
const  FETCH_ROOM_ITEM = 'FETCH_ROOM_ITEM';


let initialState = {

    room:[],
    Restaurant:[],
    restaurant_name:'',
    phone:null,
    title:'',
    error:null,
    loading:false
};

export const individualRestaurantReducer = (state = initialState, action) =>{
    switch (action.type) {

        case FETCH_RESTAURANT_ROOM_DATA:
            return {...state,error: null, loading: true};
        case FETCH_RESTAURANT_ROOM_DATA_SUCCESS:
             return {...state,error: null,loading: false,
                 Restaurant:action.payload.Restaurant,
                 phone:action.payload.Restaurant[0]?.phone,
                 restaurant_name:action.payload.Restaurant[0]?.restaurant_name
            };
        case FETCH_ROOM_ITEM:
            return {...state,room:action.payload,};
        case FETCH_RESTAURANT_ROOM_DATA_ERROR:
            return {...state,error: true,loading: false}

        default:return state;
    }

}
export const fetchRoomItem = (payload) => ({type:FETCH_ROOM_ITEM, payload})
export const getIndividualRestaurantsData = (category,id) => async (dispatch) => {
    try {
            dispatch({type:FETCH_RESTAURANT_ROOM_DATA})
             const {data} = await restaurantsApi.getIndividualRestData(id)
             dispatch({type:FETCH_RESTAURANT_ROOM_DATA_SUCCESS, payload:data})
        }catch (e) {
            dispatch({type:FETCH_RESTAURANT_ROOM_DATA_ERROR})
        }
}
