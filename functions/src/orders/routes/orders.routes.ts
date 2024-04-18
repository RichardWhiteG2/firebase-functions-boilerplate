// import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import { getOrderById } from "../controllers/getOrderById.controller";
import { getOrders } from "../controllers/getOrders.controller";
import { createOrder } from "../controllers/createOrder.controller";
import { updateOrderById } from "../controllers/updateOrderById.controller";

// const app = express();
const ordersRouter = express.Router();

ordersRouter.get("/order/:id", getOrderById);
ordersRouter.get("/orders", getOrders);
ordersRouter.post("/order", createOrder);
ordersRouter.patch("/order/:id", updateOrderById);
// app.use("/api", router);

export default ordersRouter;
// export const handler = onRequest(app);
