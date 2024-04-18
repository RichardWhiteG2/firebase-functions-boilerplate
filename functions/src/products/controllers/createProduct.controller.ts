import { Request, Response } from "express";

export const createProduct = (request: Request, response: Response) => {
  const body = request.body;
  response.status(200).send(`Create a Product: ${JSON.stringify(body)}`);
};
