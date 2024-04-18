import { Request, Response } from "express";

export const updateProductById = (request: Request, response: Response) => {
  const id = request.params.id;
  if (!id) {
    response.status(400).send("Bad Request: No ID provided");
    return;
  }
  const body = request.body;
  response
    .status(200)
    .send(`Update a Product: ${id} with ${JSON.stringify(body)}`);
};
