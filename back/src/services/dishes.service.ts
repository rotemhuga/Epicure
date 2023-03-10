import {dishModel} from "../model/dishes.model"

export const getDishes = async () => {
    try {
        const dishes = await dishModel.find();
        console.log(dishes)
        return dishes
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};
