
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
   
    

export class CreateModeloDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;

    @IsNotEmpty()
    @MaxLength(100)
    nombre: string

    @IsNotEmpty()
    @MaxLength(100)
    marca_id: string

    @IsNumber()
    @IsNotEmpty()
    user_id: number

    

}