import express from "express";
import chefsRoutes from "../routes/chefs.routes";
import restaurantsRoutes from "../routes/restaurants.routes";
// import DishesRoutes from "../routes/chefs.routes";

const router = express.Router();

// router.use("/epicure", chefsRoutes);
router.use("/epicure", restaurantsRoutes);
// router.use("/DishesPage", DishesRoutes);

export default router;
