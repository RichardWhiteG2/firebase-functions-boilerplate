import { Request, Response } from "express";
import * as admin from "firebase-admin";
import { CreateUserDto } from "./dtos/createUser.dto";
import { validate } from "class-validator";

export const createUser = async (request: Request, response: Response) => {
  const dto: CreateUserDto = Object.assign(new CreateUserDto(), request.body);

  const errors = await validate(dto);
  if (errors.length > 0) {
    response.status(400).send(errors);
    return;
  }
  const { email, phoneNumber, password, fullName: displayName } = dto;

  try {
    const usr = await admin.auth().createUser({
      email,
      emailVerified: false,
      phoneNumber,
      password,
      displayName,
      photoURL: "http://www.example.com/12345678/photo.png",
      disabled: false,
    });
    response
      .status(200)
      .send(`User: ${JSON.stringify(usr)} created successfully!`);
  } catch (error) {
    response
      .status(500)
      .send(`Error: ${JSON.stringify(error)} user not created!`);
  }
};
