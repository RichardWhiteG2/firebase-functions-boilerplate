import * as admin from "firebase-admin";
import * as serviceAccount from "./config/vichosworld-mx-firebase-adminsdk-2knjr-e5a5d875cf.json";
import "reflect-metadata";
import { handler as productsHandler } from "./products/handler";
import { handler as ordersHandler } from "./orders/handler";
import { handler as usersHandler } from "./users/handler";

export const products = productsHandler;
export const orders = ordersHandler;
export const users = usersHandler;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});
admin.auth().createUser;
