import axios from "axios";

const  FETCH_HOMEPAGE_DATA = 'FETCH_HOMEPAGE_DATA';
const  FETCH_HOMEPAGE_DATA_SUCCESS = 'FETCH_HOMEPAGE_DATA_SUCCESS';
const  FETCH_HOMEPAGE_DATA_ERROR = 'FETCH_HOMEPAGE_DATA_ERROR';

let initialState = {
     category: [
        {id:1,name:'Pizza'},
        {id:2,name:'Shawurma'},
        {id:3,name:'Desserts'},
        {id:4,name:'Sushi'},
        {id:5,name:'Burgers'},
         {id:6,name:'Pizza'},
         {id:7,name:'Sushi'},
         {id:8,name:'Desserts'}
    ],
    cities:['Moscow', 'Sochi', 'Saint Peterburg', 'Novosibirsk',
        'Voronezh', 'Belgorod', 'Kursk', 'Omsk', 'Tver'
    ],
    topRest:[
        {
            id: 1,
            name: 'Tashir Pizza',
            address: '63 Komitas Ave ·',
            logo: 'http://www.tashirpizza.am/skin/frontend/tashir/default/images/logo.png'
        },
        {
            id: 2,
            name: 'Lavash restaurant',
            address: '21 Tumanyan St',
            logo: 'https://www.virtlo.com/uploads/places/39/39/kubbf516asghqsry1imfysnid.png'
        },
        {
            id: 3,
            name: 'Sherep Restaurant',
            address: '1 Amiryan St',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqeZfNhiO7FrjckHGaLEJ4y4QPI89aKV3CA&usqp=CAU'
        },
        {
            id: 4,
            name: 'Karas Food Chain',
            address: ' 1 Hrachya Kochar St',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFzz96bGDrebsGKGCzOV3DCWa9exFDzhGGw&usqp=CAU'
        },
        {
            id: 5,
            name: ' EL Garden',
            address: '8 Tsitsernakaberd Hwy',
            logo: 'https://www.wedding.am/sites/default/files/styles/business_logo/public/business/logo/el%20garden.jpg?itok=DjBNo69a'
        }
    ],
    error:null,
    loading:false
};

export const topPageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_HOMEPAGE_DATA:
            return {...state,error: null, loading: true};
        case FETCH_HOMEPAGE_DATA_SUCCESS:
            // return {error: null,loading: false,category:action, topRest:action};
            return {error: null,loading: false};
        case FETCH_HOMEPAGE_DATA_ERROR:
            return {error: true,loading: false}

        default:return state;
    }

}

export const fetchTopPageData = () => async (dispatch) => {
    try {
        dispatch({type:FETCH_HOMEPAGE_DATA})
        const response = await axios.get('')
        dispatch({type:FETCH_HOMEPAGE_DATA_SUCCESS, payload:response})
    }catch (e) {
        dispatch({type:FETCH_HOMEPAGE_DATA_ERROR})
    }
}