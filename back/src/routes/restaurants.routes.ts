import express, {Request, Response} from "express";
import {getAllRestaurants} from "../controllers/controllers"

const router = express.Router();

router.get('/epicure', getAllRestaurants);
export default router;