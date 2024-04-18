import { Request, Response } from "express";
export const getOrders = (request: Request, response: Response) => {
  // const info = request.headers;
  response.status(200).send("Return all Orders!");
};
