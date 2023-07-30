import { IsNotEmpty, IsNumber,IsString, } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsNumber()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    sexo: string;

    @IsString()
    @IsNotEmpty()
   active : boolean;
  

}