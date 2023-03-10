import express, {Request, Response} from "express";
import {getAllDishes} from "../controllers/dishes.controllers"

const router = express.Router();

router.get('/DishesPage', getAllDishes);
export default router;


