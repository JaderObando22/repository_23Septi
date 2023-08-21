
    import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
   
    

    export class CreateMarcaDto {
        @IsNotEmpty()
        @IsNumber()
        id?: number;
        
        @IsNotEmpty()
        @MaxLength(100)
        Marca: string;

        @IsNumber()
        @IsNotEmpty()
        user_id: number;

        

    }