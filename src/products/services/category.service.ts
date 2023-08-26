import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from '../dto/category.dto';




@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository( Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

 
  async create(createCategoryDto: CreateCategoryDto) {
    const categories = this.categoryRepo.create(createCategoryDto);
    await this.categoryRepo.save(categories);

    return Category;
  }

    //Encontrar una category
    findOne(id: number){
      return this.categoryRepo.findOneBy({id});
    }

    //Mostrar todas las category
    findAll(){
      return this.categoryRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    //Eliminar un registro de las modelo
    async remove(id: number){
      const Categories = await this.findOne(id);
      await this.categoryRepo.remove(Categories);
      return 'Category sera eliminada satisfactoriamente';
    }

    //Actualizar una modelo
    async update(id: number, cambios: CreateCategoryDto){
      // aqui se encuentra el modelo
      const oldCategory = await this.findOne(id);
      //Aqui lo actualizo o lo uno con los nuevos cambios
      const updatedCategory = await this.categoryRepo.merge(oldCategory, cambios);
      //Aqui retornare  a la modelo
      return this.categoryRepo.save(updatedCategory);
    }
  }