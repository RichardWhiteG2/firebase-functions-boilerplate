import { onRequest } from "firebase-functions/v2/https";
import { ordersModel } from "../models/index.models";

export const handler = onRequest(ordersModel.app);
