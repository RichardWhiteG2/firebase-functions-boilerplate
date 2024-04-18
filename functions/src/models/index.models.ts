import ordersRouter from "../orders/routes/orders.routes";
import productRouter from "../products/routes/products.routes";
import userRouter from "../users/routes/users.routes";
import { Server } from "./server";

export const ordersModel = new Server(ordersRouter);
export const productsModel = new Server(productRouter);
export const usersModel = new Server(userRouter);
