import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateCategoryDto,  } from '../dto/category.dto';
import { CategoryService, } from '../services/category.service';

  
  
  @Controller('Categories')
  
  export class CategoriesController {
   constructor(private readonly CategoryService: CategoryService) {}
  
   @Post()
   async create(@Body() CategoryDto: CreateCategoryDto) {
     return await this.CategoryService.create(CategoryDto);
   }
  
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.CategoryService.findOne(id);
   }
    
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.CategoryService.remove(id);
   }
  
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createCategoryDto:CreateCategoryDto, 
     ) {
       return this.CategoryService.update(id,createCategoryDto)
     }
   }