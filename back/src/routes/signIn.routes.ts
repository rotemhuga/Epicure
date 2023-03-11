import express, {Request, Response} from "express";
import {getSignIn} from "../controllers/signIn.controllers"

const router = express.Router();

router.get('/signIn', getSignIn);
export default router;