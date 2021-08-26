import {restaurantsApi} from "../../api/api";

const  SEND_RESERVATION_DATA = 'SEND_RESERVATION_DATA';
const  SEND_RESERVATION_DATA_SUCCESS = 'SEND_RESERVATION_DATA_SUCCESS';
const  SEND_RESERVATION_DATA_ERROR = 'SEND_RESERVATION_DATA_ERROR';
const  RETURN_TO_ORIGIN_STATE = 'RETURN_TO_ORIGIN_STATE';

let initialState = {
    errors: null,
    massage: '',
    success: null,
    error: null,
    loading: false
};
export const returnToOriginState = () =>({type:RETURN_TO_ORIGIN_STATE})
export const reservationReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEND_RESERVATION_DATA:
            return {...state,error: null, loading: true};
        case SEND_RESERVATION_DATA_SUCCESS:
             return {...state,error: null,loading: false,
                 errors:action.payload.errors,
                 success:action.payload.success,
                 massage:action.payload.massage};
        case SEND_RESERVATION_DATA_ERROR:
            return {error: true,loading: false};
        case RETURN_TO_ORIGIN_STATE:
            return initialState

        default:return state;
    }

}


export const fetchReservationData = (formData) => async (dispatch) => {
    try {
        dispatch({type:SEND_RESERVATION_DATA})
        const {data} = await restaurantsApi.sendReservationData(formData)
        console.log(data,'data')
       dispatch({type:SEND_RESERVATION_DATA_SUCCESS, payload:data,bool:true})
    }catch (e) {
        dispatch({type:SEND_RESERVATION_DATA_ERROR})
    }
}
