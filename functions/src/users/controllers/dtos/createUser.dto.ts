import { IsPhoneNumber, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString()
  fullName!: string;

  @IsString()
  email!: string;

  @IsString()
  @IsPhoneNumber("MX")
  phoneNumber!: string;

  @IsString()
  @Length(8)
  password!: string;
}
