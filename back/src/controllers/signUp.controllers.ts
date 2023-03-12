import {getSignUp} from "../services/signUp.service"
import express, {Request, Response} from "express";

export const getControllSignUp = async (req: Request, res: Response) => {
    try {
        const allData = req.body;
        const signUp = await getSignUp(allData);
        return res.status(200).json(signUp);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}