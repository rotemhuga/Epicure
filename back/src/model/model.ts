import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IrestaurantBack {
    id?:string,
    img?:string,
    alt?:string,
    name?: string,
    chef?: string,
    rating?: string,
    openingHours?: string,
    address?:string,
    dishes?: number[],
    isPopular?: boolean,
    isNew?: boolean,
    isOpen?: boolean,
    map?: boolean,
}

export const restaurantSchema = new Schema<IrestaurantBack>({
    id: {type:String},
    img:{type:String},
    alt:{type:String},
    name: {type:String},
    chef: {type:String},
    rating: {type:String},
    openingHours: {type:String},
    address:{type:String},
    dishes: {type:Array<Number>},
    isPopular: {type:Boolean},
    isNew: {type:Boolean },
    isOpen: {type:Boolean},
    map: {type:Boolean},
}, { suppressReservedKeysWarning: true });
   
export const restaurantModel = mongoose.model<IrestaurantBack>("restaurants", restaurantSchema);

// export interface IchefBack {
//     id?:string,
//     name?: string,
//     info?: string,
//     portrait?: string,
//     restaurants?: string[],
//     isChefOfTheWeek?: boolean,
//     isNew?: boolean,
//     mostViewed?:boolean,
// }

// export const chefSchema = new Schema<IrestaurantBack>({
//     id:{type:String},
//     name:{type:String},
//     info: {type:String},
//     portrait: {type:String},
//     restaurants: {type:Array<String>},
//     isChefOfTheWeek: {type:Boolean},
//     isNew: {type:Boolean},
//     mostViewed:{type:Boolean},

// }, { suppressReservedKeysWarning: true });
   
// export const chefModel = mongoose.model<IchefBack>("chefs", chefSchema);