import { onRequest } from "firebase-functions/v2/https";
import { productsModel } from "../models/index.models";

export const handler = onRequest(productsModel.app);
