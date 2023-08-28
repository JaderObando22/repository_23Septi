import { IsDateString, IsNotEmpty, IsNumber,IsOptional,IsString, MaxLength } from "class-validator";

export class CreateProveedorDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    proveedor: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    create_at: Date;

}