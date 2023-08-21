import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])], 
    controllers: [ProductsController],
    //Aqui van los controladorres
    providers: [ ProductsService],
    // aqui van los servicios
   
})
export class ProductsModule{}