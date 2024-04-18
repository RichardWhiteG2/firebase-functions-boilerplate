import { Request, Response } from "express";

export const createOrder = (request: Request, response: Response) => {
  const body = request.body;
  response.status(200).send(`Create a order: ${JSON.stringify(body)}`);
};
