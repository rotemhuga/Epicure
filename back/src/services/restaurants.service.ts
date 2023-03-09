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

// export const getChefs = async () => {
//     try {
//         const chefs = await chefModel.find();
//         console.log(chefs)
//         return chefs
//     } catch (e) {
//         throw Error('Error while Paginating Users')
//     }
// };
