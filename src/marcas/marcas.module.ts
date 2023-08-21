import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Marca } from "./entities/marca.entity";
import { MarcasController } from './controllers/marcas.controllers';
import { MarcasService } from './services/marcas.service';
import { Modelo } from './entities/modelo.entity';
import { ModelosController } from './controllers/modelo.controller';
import { ModeloService } from './services/modelo.service';


@Module ({
  imports: [TypeOrmModule.forFeature([Marca, Modelo])],
  controllers: [MarcasController, ModelosController],
  providers: [MarcasService, ModeloService ],
})
export class MarcaModule{}