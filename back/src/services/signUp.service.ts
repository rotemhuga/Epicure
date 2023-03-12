import {signUpModel} from "../model/signUp.model"
import { ISignUpBack } from "../model/signUp.model";
import express, {Request, Response} from "express";



export const getSignUp = async (data:any) => {
const _signUp = new signUpModel();

try {
        console.log(_signUp.emailAddress)
        const checkEmail = signUpModel.find({emailAddress:_signUp.emailAddress})
        // if (checkEmail) {
        //     return res.status(409).send("User Already Exist. Please Login");
        //   }
        await _signUp.save();
        return _signUp
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};
