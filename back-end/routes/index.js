import { Router } from "express";
import UserRoutes from "../domains/users/routes.js";
import PlacesRoutes from "../domains/places/routes.js";

const router = Router();

router.use("/users", UserRoutes);
router.use("/places", PlacesRoutes);

export default router;