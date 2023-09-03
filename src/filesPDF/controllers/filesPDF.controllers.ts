import { Controller, Post, Get, UploadedFile, UseInterceptors, BadRequestException, UploadedFiles } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilesPDFService } from '../services/filesPDF.service';
import { fileFilterPDF } from 'src/helpers/fileFilterPDF.helper';
import { fileNamer } from 'src/helpers/fileNamer.helper';

@Controller('filespdf')
export class FilesPDFController {
    constructor( private readonly filespdfService: FilesPDFService) {}

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('filespdf', {
        //llegamos al fileFilter de Multer y le asignamos nuestro helper
        fileFilter: fileFilterPDF,

        //definimos en donde se va a guardar el archivo y lo renombramos
        storage: diskStorage({
          destination: './files/pdf/archivos',
          filename: fileNamer
        }),
    }),
)
    uploadImage(@UploadedFile() filesPDF: Express.Multer.File) {
        if(!filesPDF){
            throw new BadRequestException('Asegurese que el archivo sea pdf');
        }

        return {
            filesPDFName: filesPDF.filename,
        };
    }
}