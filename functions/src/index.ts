import * as admin from "firebase-admin";
import * as serviceAccount from "./config/project-mx-firebase-adminsdxxxxjson";
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
