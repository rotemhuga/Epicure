import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface ISignUpBack {
    firstName?:string,
    lastName?:string,
    emailAddress?:string,
    shippingAdress?:string,
    password?: string,
    confirmPassword?: string,
}

export const signUpSchema = new Schema<ISignUpBack>({
    firstName: {type:String},
    lastName:{type:String},
    emailAddress:{type:String},
    shippingAdress: {type:String},
    password: {type:String},
    confirmPassword: {type:String},
}, { suppressReservedKeysWarning: true});
   
export const signUpModel = mongoose.model<ISignUpBack>("signUp", signUpSchema);
