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
    getFilterWithCity(cityName){
        return instance.get(`restoran/city/${cityName}`)
    },
    getFilterWithCategory(categoryName){
        return instance.get(`category/${categoryName}`)
    },
    getFilterWithCityAndCategory(categoryName, cityName){
        return instance.get(`restoran/${categoryName}/${cityName}`)
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
