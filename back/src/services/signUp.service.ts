import {signUpModel} from "../model/signUp.model"
import { ISignUpBack } from "../model/signUp.model";
import express, {Request, Response} from "express";

// export const getSignUp = async(allDataUser:any) => {
//     console.log("users services connected");
//     const oldUser = await ISignUpBack.findOne({email: allDataUser.email});
//     return oldUser
// }

export const getSignUp = async (user:any) => {
try {
    console.log("users services connected");
    const _userSign =  new signUpModel(user)
    await _userSign.save();
        return _userSign
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};
