import {restaurantsApi} from "../../api/api";

const  SEND_SUPPORT_DATA = 'SEND_SUPPORT_DATA';
const  SEND_SUPPORT_DATA_SUCCESS = 'SEND_SUPPORT_DATA_SUCCESS';
const  SEND_SUPPORT_DATA_ERROR = 'SEND_SUPPORT_DATA_ERROR';
const  CHANGE_TO_DEFAULT_MESSAGES = 'CHANGE_TO_DEFAULT_MESSAGES';

let initialState = {
    errors: null,
    massages: '',
    success: null,
    error: null,
    loading: false
};

export const sendSupportDataReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEND_SUPPORT_DATA:
            return {...state,error: null, loading: true};
        case SEND_SUPPORT_DATA_SUCCESS:
            return {...state,error: null,loading: false,
                errors:action.payload.errors,
                success:action.payload.success,
                massages:action.payload.messege};
        case SEND_SUPPORT_DATA_ERROR:
            return {error: true,loading: false}
        case CHANGE_TO_DEFAULT_MESSAGES:
            return {massages: ''}

        default:return state;
    }

}

export const changeToDefaultMessages = () => ({type: CHANGE_TO_DEFAULT_MESSAGES})

export const fetchSupportData = (formData) => async (dispatch) => {
    try {
        dispatch({type:SEND_SUPPORT_DATA})
        const {data} = await restaurantsApi.fetchMessageToSupport(formData)
        dispatch({type:SEND_SUPPORT_DATA_SUCCESS, payload:data})
    }catch (e) {
        dispatch({type:SEND_SUPPORT_DATA_ERROR})
    }
}