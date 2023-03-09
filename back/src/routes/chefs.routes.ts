import express, {Request, Response} from "express";
import {getAllChefs} from "../controllers/chefs.controllers"

const router = express.Router();

router.get('/ChefsPage', getAllChefs);
export default router;


