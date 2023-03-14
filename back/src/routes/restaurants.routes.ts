import express, {Request, Response} from "express";
import {getAllRestaurants, deleteClickedRest} from "../controllers/restaurants.controllers"

const router = express.Router();

router.get('/restaurantsPage', getAllRestaurants);
router.delete('/restaurantsPage', deleteClickedRest);
export default router;