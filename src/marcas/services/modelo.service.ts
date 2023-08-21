import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarcaDto } from '../dto/marca.dto';
import { Marca } from '../entities/marca.entity';
import { Modelo } from '../entities/modelo.entity';
import { CreateModeloDto } from '../dto/modelo.dto';




@Injectable()
export class ModeloService {
  constructor(
    @InjectRepository( Modelo)
    private readonly modeloRepo: Repository<Modelo>,
  ) {}

 
  async create(createModeloDto: CreateModeloDto) {
    const modelos = this.modeloRepo.create(createModeloDto);
    await this.modeloRepo.save(modelos);

    return Modelo;
  }

    //Encontrar una modelo
    findOne(id: number){
      return this.modeloRepo.findOneBy({id});
    }

    //Mostrar todas las modelo
    findAll(){
      return this.modeloRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    //Eliminar un registro de las modelo
    async remove(id: number){
      const Modelos = await this.findOne(id);
      await this.modeloRepo.remove(Modelos);
      return 'Modelo sera eliminada satisfactoriamente';
    }

    //Actualizar una modelo
    async update(id: number, cambios: CreateModeloDto){
      // aqui se encuentra el modelo
      const oldModelo = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      const updatedModelo = await this.modeloRepo.merge(oldModelo, cambios);
      //Aqui retornare  a la modelo
      return this.modeloRepo.save(updatedModelo);
    }
  }