import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
    constructor() {}
        
 getStaticImageName(imageName: string) {
    const path = join(__dirname, '../../../static/products', imageName);

    if(!existsSync(path)) {
        throw new BadRequestException(
            `No existe un producto con la imagen ${imageName}`,
        );
    }

    //si existe la imagen entonces que la retone
    return path;
 }

 getStaticImageUserName(imageName: string) {
    const path = join(__dirname, '../../../static/users', imageName);

    if(!existsSync(path)) {
        throw new BadRequestException(
            `No existe un producto con la imagen ${imageName}`,
        );
    }

    //si existe la imagen entonces que la retone
    return path;
 }
}