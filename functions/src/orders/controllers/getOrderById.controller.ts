import { Request, Response } from "express";
// import express from "express";

export const getOrderById = (request: Request, response: Response) => {
  const id = request.params.id;

  if (!id) {
    response.status(400).send("Bad Request: No ID provided");
    return;
  }
  response.status(200).send(`Return a Order By ID: ${id}`);
};
