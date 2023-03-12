import {restaurantModel} from "../model/restaurants.model"

export const getRestaurants = async () => {
    try {
        const restaurants = await restaurantModel.find();
        return restaurants
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};

