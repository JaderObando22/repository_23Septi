import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { ProductImage } from './entities/product-image.entity';
import { Category } from './entities/category.entity';
import { CategoryController } from './controllers/category.controller';
import { Proveedor } from './entities/proveedor.entity';
import { ProveedorController } from './controllers/proveedores.controller';
import { CategoryService } from './services/category.service';
import { ProveedorService } from './services/proveedores.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product, ProductImage, Category, Proveedor])], 
    controllers: [ProductsController, CategoryController, ProveedorController],
    //Aqui van los controladorres
    providers: [ ProductsService, CategoryService, ProveedorService],
    // aqui van los servicios
   
})
export class ProductsModule{}