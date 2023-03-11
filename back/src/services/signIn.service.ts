import {signInModel} from "../model/signIn.model"

export const getSignIn = async () => {
    try {
        const signIn = await signInModel.find();
        console.log(signIn)
        return signIn
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};

