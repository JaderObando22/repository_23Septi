import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMarcaDto } from '../dto/marca.dto';
import { Marca } from '../entities/marca.entity';




@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository( Marca)
    private readonly marcaRepo: Repository<Marca>,
  ) {}

 
  async create(createMarcaDto: CreateMarcaDto) {
    const marcas = this.marcaRepo.create(createMarcaDto);
    await this.marcaRepo.save(marcas);

    return Marca;
  }

    //Encontrar una marca
    findOne(id: number){
      return this.marcaRepo.findOneBy({id});
    }

    //Mostrar todas las marcas 
    findAll(){
      return this.marcaRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    //Eliminar un registro de las marcas
    async remove(id: number){
      const Marcas = await this.findOne(id);
      await this.marcaRepo.remove(Marcas);
      return 'Marca sera eliminada satisfactoriamente';
    }

    //Actualizar una marca 
    async update(id: number, cambios: CreateMarcaDto){
      // aqui se encuentra la marca
      const oldMarca = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      const updatedMarca = await this.marcaRepo.merge(oldMarca, cambios);
      //Aqui retornare  a la marca
      return this.marcaRepo.save(updatedMarca);
    }
  }