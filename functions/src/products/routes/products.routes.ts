// import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import { getProductById } from "../controllers/getProductById.controller";
import { getProducts } from "../controllers/getProducts.controller";
import { createProduct } from "../controllers/createProduct.controller";
import { updateProductById } from "../controllers/updateProductById.controller";
import { deleteProductById } from "../controllers/deleteProductById.controller";

const productRouter = express.Router();

productRouter.get("/product/:id", getProductById);
productRouter.get("/products", getProducts);
productRouter.post("/product", createProduct);
productRouter.patch("/product/:id", updateProductById);
productRouter.delete("/product/:id", deleteProductById);

export default productRouter;
