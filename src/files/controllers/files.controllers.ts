import { Controller, Post, Get, UploadedFile, UseInterceptors, BadRequestException, Res, Param } from '@nestjs/common';
import { FilesService } from '../services/files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from 'src/helpers/fileFilter.helper';
import { diskStorage } from 'multer';
import { fileNamer } from 'src/helpers/fileNamer.helper';
import { Response } from 'express';

@Controller('files')
export class FilesController {
    constructor( private readonly filesService: FilesService) {}

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
        //llegamos al fileFilter de Multer y le asignamos nuestro helper
        fileFilter: fileFilter,

        //definimos en donde se va a guardar el archivo y lo renombramos
        storage: diskStorage({
          destination: './static/products/',
          filename: fileNamer
        }),
    }),
)
    uploadImage(@UploadedFile() file: Express.Multer.File) {
        if(!file){
            throw new BadRequestException('Asegurese que el archivo es una imagen');
        }

     const url = `${file.filename}`;
    
    return { url };
    }

    @Get('product/:imageName')
    findProduct(@Res() res: Response, @Param('imageName') imageName: string) {
        const path = this.filesService.getStaticImageName(imageName);

        res.sendFile(path);

    }  

    @Get('user/:imageName')
    findUser(@Res() res: Response, @Param('imageName') imageName: string) {
        const path = this.filesService.getStaticImageName(imageName);

        res.sendFile(path);

    } 
}