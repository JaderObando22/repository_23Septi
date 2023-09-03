import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MarcaModule } from './marcas/marcas.module';
import { Modelo } from './marcas/entities/modelo.entity';
import { FilesModule } from './files/files.module';
import { Category } from './products/entities/category.entity';
import { Proveedor } from './products/entities/proveedor.entity';
import { FilesPDFModule } from './filesPDF/filesPDF.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'shop',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductsModule,
    UsersModule,
    MarcaModule,
    Modelo,
    FilesModule,
    Category,
    Proveedor,
    FilesPDFModule,

   
    
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {

}