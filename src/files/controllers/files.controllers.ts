import { Controller, Post, Get, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FilesService } from '../services/files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from 'src/helpers/fileFilter.helper';
import { diskStorage } from 'multer';
import { fileNamer } from 'src/helpers/fileNamer.helper';

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

        return {
            fileName: file.filename,
        };
    }
}