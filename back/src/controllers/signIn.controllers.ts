import {getSignIn} from "../services/signIn.service"
import express, {Request, Response} from "express";

export const getSignIn = async (req: Request, res: Response) => {
    try {
        const signUp = await getSignIn();
        return res
        .status(200)
        .json(signIn);
    } catch (err: any) {
        return res.status(400).json({ status: 400, message: err.message });
    }
}