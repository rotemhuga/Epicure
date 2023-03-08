import {restaurantModel} from "../model/model"

export const getRestaurants = async () => {
    try {
        const restaurants = await restaurantModel.find();
        console.log(restaurants)
        return restaurants
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};
