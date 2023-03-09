import express, {Request, Response} from "express";
import {getAllRestaurants} from "../controllers/restaurants.controllers"

const router = express.Router();

router.get('/restaurantsPage', getAllRestaurants);
export default router;