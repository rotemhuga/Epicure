import {signUpModel} from "../model/signUp.model"

export const getSignUp = async () => {
    try {
        const signUp = await signUpModel.find();
        console.log(signUp)
        return signUp
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};