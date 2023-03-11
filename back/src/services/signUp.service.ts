import {signUpModel} from "../model/signUp.model"

export const getSignIn = async () => {
    try {
        const signIn = await signUpModel.find();
        console.log(signUp)
        return signUp
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};