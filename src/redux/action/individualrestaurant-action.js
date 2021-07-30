import {restaurantsApi} from "../../api/api";

const  FETCH_RESTAURANT_ROOM_DATA = 'FETCH_RESTAURANT_ROOM_DATA';
const  FETCH_RESTAURANT_ROOM_DATA_SUCCESS = 'FETCH_RESTAURANT_ROOM_DATA_SUCCESS';
const  FETCH_RESTAURANT_ROOM_DATA_ERROR = 'FETCH_RESTAURANT_ROOM_DATA_ERROR';


let initialState = {

   room:[
       // {id:1,title:'6:00 PM', description:'Lorem ipsum — классический текст-«рыба» (условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы). Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку[1]. Распространился в 1970-х годах из-за трафаретов компании Letraset, a затем — из-за того, что служил примером текста в программе PageMaker. Испорченный текст, вероятно, происходит от его издания в Loeb Classical Library 1914 года, в котором слово dolorem разбито переносом так, что страница 36 начинается с lorem ipsum… (do- осталось на предыдущей)[2].',
       //     image:require('../../../assets/images/table/maket.jpg'),table:[
       //         ['3', '4', '', '8','6'],
       //         ['', '6', '4', '8','4'],
       //         ['4', '3', '6', '8','8'],
       //         ['4', '', '', '8','4'],
       //         ['4', '', '', '','6'],],},
       // {id:2,title:'6:45 PM',description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати ..',
       //     image:require('../../../assets/images/table/maket.jpg'),table:[
       //         ['6', '4', '', '8','8'],
       //         ['', '6', '4', '8','8'],
       //         ['6', '4', '6', '','8'],
       //         ['6', '', '3', '8','8'],
       //         ['6', '', '', '','8'],]},
       // {id:3,title:'7:30 PM',description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати ..',
       //     image:require('../../../assets/images/table/maket.jpg'),table:[
       //         ['4', '4', '', '4',''],
       //         ['', '', '4', '4','6'],
       //         ['4', '6', '', '4','4'],
       //         ['', '', '', '4','4'],
       //         ['4', '', '', '','6'],]},
       // {id:4,title:'8:00 PM',description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати ..',
       //     image:require('../../../assets/images/table/maket.jpg'),table:[
       //         ['4', '4', '', '3','6'],
       //         ['', '6', '', '4','4'],
       //         ['4', '3', '4', '6',''],
       //         ['4', '', '', '4','4'],
       //         ['4', '', '', '','6'],]},
       // {id:5,title:'8:25 PM',description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати ..',
       //     image:require('../../../assets/images/table/maket.jpg'),table:[ ['3', '4', '', '8','6'],
       //         ['', '6', '4', '8','4'],
       //         ['4', '3', '6', '8','8'],
       //         ['4', '', '', '8','4'],
       //         ['4', '', '', '','6'],]},
       // {id:6,title:'8:55 PM',description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати ..',
       //     image:require('../../../assets/images/table/maket.jpg'),table:[ ['3', '4', '', '8','6'],
       //         ['', '6', '4', '8','4'],
       //         ['4', '3', '6', '8','8'],
       //         ['4', '', '', '8','4'],
       //         ['4', '', '', '','6'],]},
       // {id:7,title:'9:30 PM',description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати ..',
       //     image:require('../../../assets/images/table/maket.jpg'),table:[ ['3', '4', '', '8','6'],
       //         ['', '6', '4', '8','4'],
       //         ['4', '3', '6', '8','8'],
       //         ['4', '', '', '8','4'],
       //         ['4', '', '', '','6'],]},
   ],
    title:'',
    error:null,
    loading:false
};

export const individualRestaurantReducer = (state = initialState, action) =>{
    switch (action.type) {

        case FETCH_RESTAURANT_ROOM_DATA:
            return {...state,error: null, loading: true};
        case FETCH_RESTAURANT_ROOM_DATA_SUCCESS:
             return {...state,error: null,loading: false,room:action.payload};
        case FETCH_RESTAURANT_ROOM_DATA_ERROR:
            return {...state,error: true,loading: false}

        default:return state;
    }

}

export const getIndividualRestaurantsData = (category,id) => async (dispatch) => {
    try {
            dispatch({type:FETCH_RESTAURANT_ROOM_DATA})
             const {data} = await restaurantsApi.getIndividualRestData(id)
        console.log(data,"ind")
             dispatch({type:FETCH_RESTAURANT_ROOM_DATA_SUCCESS, payload:data})
        }catch (e) {
            dispatch({type:FETCH_RESTAURANT_ROOM_DATA_ERROR})
        }
}