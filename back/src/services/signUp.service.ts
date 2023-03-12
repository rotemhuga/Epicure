import {signUpModel} from "../model/signUp.model"
import { ISignUpBack } from "../model/signUp.model";

export const getSignUp = async (data:any) => {
const _signUp = new signUpModel(data);
try {
        console.log(_signUp.emailAddress)
        const checkEmail = signUpModel.find({emailAddress:_signUp.emailAddress})
        console.log(checkEmail)
        await _signUp.save();
        return _signUp
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};
