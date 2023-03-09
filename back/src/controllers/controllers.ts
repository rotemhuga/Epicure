import {getRestaurants} from "../services/restaurants.service"
import express, {Request, Response} from "express";

export const getAllRestaurants = async (req: Request, res: Response) => {
    try {
        const allRestaurants = await getRestaurants();
        return res
        .status(200)
        .json(allRestaurants);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}
// export const getAllChefs = async (req: Request, res: Response) => {
//     try {
//         const allChefs = await getChefs();
//         return res
//         .status(200)
//         .json(allChefs);
//     } catch (err: any) {
//         return res.status(400).json({ status: 400, message: err.message });
//     }
// }