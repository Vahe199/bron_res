import axios from "axios";


const instance = axios.create(
    {
        baseURL: "https://restoran.fab.nu/",
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    })


export const restaurantsApi = {

    topRestaurants() {
        return instance.get('homes')
    },
    getIndividualRestData(id){
        return instance.get(`restoran/${id}`)
    },
    sendReservationData(data){
        return instance.post('/reservation', data)
    },
    fetchRestaurantsNearMe(latitude,longitude){
        return instance.get(`restoran/lant_long/${latitude}/${longitude}`)
    },
    fetchCityRestaurants(city){
        return instance.get(`restoran/city/${city}`)
    },
    fetchCategoryRestaurants(category){
        return instance.get(`category/${category}`)
    },
    fetchCategoryAndCityRestaurants(category,city){
        return instance.get(`/restoran/${category}/${city}'`)
    },
}
