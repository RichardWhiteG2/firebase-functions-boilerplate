import { Request, Response } from "express";

export const updateOrderById = (request: Request, response: Response) => {
  const id = request.params.id;
  if (!id) {
    response.status(400).send("Bad Request: No ID provided");
    return;
  }
  const body = request.body;
  response
    .status(200)
    .send(`Update a order: ${id} with ${JSON.stringify(body)}`);
};
