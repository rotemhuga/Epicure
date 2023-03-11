import {getSignUp} from "../services/signUp.service"
import express, {Request, Response} from "express";

export const getSignUp = async (req: Request, res: Response) => {
    try {
        const signUp = await getSignUp();
        return res
        .status(200)
        .json(signUp);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}