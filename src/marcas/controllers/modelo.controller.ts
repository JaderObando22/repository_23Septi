import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateModeloDto,  } from '../dto/modelo.dto';
import { ModeloService } from '../services/modelo.service';

  
  
  @Controller('Modelos')
  
  export class ModelosController {
   constructor(private readonly ModeloService: ModeloService) {}
  
   @Post()
   async create(@Body() ModeloDto: CreateModeloDto) {
     return await this.ModeloService.create(ModeloDto);
   }
  
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.ModeloService.findOne(id);
   }
    
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.ModeloService.remove(id);
   }
  
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createModeloDto:CreateModeloDto, 
     ) {
       return this.ModeloService.update(id,createModeloDto)
     }
   }