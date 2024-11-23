import express from "express";
import { assignSupport, createSupport, deleteSingleSupport, getSingleSupport, getSupportAll, updateSingleSupport } from "../controllers/supportController";
import { updateOrderStatus } from "../controllers/orderController";



const supportRoutes = express.Router();

supportRoutes.post("/", createSupport);
supportRoutes.get("/", getSupportAll);
supportRoutes.get("/:id", getSingleSupport);
supportRoutes.put("/:id", updateSingleSupport);
supportRoutes.delete("/:id", deleteSingleSupport );
supportRoutes.put("/:id/assign",assignSupport );
supportRoutes.post("/:id/status", updateOrderStatus);

export default supportRoutes;