import {chefModel} from "../model/chefs.model"

export const getChefs = async () => {
    try {
        const chefs = await chefModel.find();
        console.log(chefs)
        return chefs
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};
