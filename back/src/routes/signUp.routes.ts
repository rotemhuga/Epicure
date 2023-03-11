import express, {Request, Response} from "express";
import {getSignUp} from "../controllers/signUp.controllers"

const router = express.Router();

router.get('/signUp', getSignUp);
export default router;