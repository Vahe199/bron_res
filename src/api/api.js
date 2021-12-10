import axios from "axios";
import {REST_API_URL} from "@env"

const instance = axios.create(
    {
        baseURL: `${REST_API_URL}`,
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

    getFilterWithCity(cityName){
        return instance.get(`restoran/city/${cityName}`)
    },
    getFilterWithCategory(categoryName){
        return instance.get(`category/${categoryName}`)
    },
    getFilterWithCityAndCategory(categoryName, cityName){
        return instance.get(`restoran/${categoryName}/${cityName}`)

    fetchCityRestaurants(city){
        return instance.get(`restoran/city/${city}`)
    },
    fetchCategoryRestaurants(category){
        return instance.get(`category/${category}`)
    },
    fetchCategoryAndCityRestaurants(category,city){
        return instance.get(`/restoran/${category}/${city}'`)
    },
    fetchRestaurantsWithSearch(searchValue){
        return instance.get(`/search/${searchValue}`)
    },
    fetchMessageToSupport(data){
        return instance.post(`/support`, data)

    }
}


// Route::get('/restoran/{id}', [RestoranController::class, 'show']);
// Route::get('/restoran/{category}/{city}', [RestoranController::class, 'filtercategorycity']);
// Route::get('/restoran/city/{city}', [RestoranController::class, 'city']);
// Route::get('/room/{restoranid}/{roomname}', [RestoranController::class, 'room']);
// Route::get('/restoran/lant_long/{latitude}/{longitude}', [RestoranController::class, 'lant_long']);
// Route::post('/reservation', [RestoranController::class, 'reservation']);
// 4:03
// Route::get('/category/{category}', [RestoranController::class, 'category']);
