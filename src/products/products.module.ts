import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { ProductImage } from './entities/product-image.entity';
import { Category } from './entities/category.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Product, ProductImage, Category])], 
    controllers: [ProductsController],
    //Aqui van los controladorres
    providers: [ ProductsService],
    // aqui van los servicios
   
})
export class ProductsModule{}