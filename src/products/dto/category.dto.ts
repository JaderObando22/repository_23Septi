
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
   
    

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsNumber()
    id?: number;

    @IsNotEmpty()
    user_id: number;

    @IsNotEmpty()
    categoria: string;

    @IsNumber()
    @IsNotEmpty()
    created_at: Date;
    

}