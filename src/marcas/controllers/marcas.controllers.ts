import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateMarcaDto } from '../dto/marca.dto';
import { MarcasService } from '../services/marcas.service';

  
  
  @Controller('Marcas')
  
  export class MarcasController {
   constructor(private readonly MarcasService: MarcasService) {}
  
   @Post()
   async create(@Body() MarcaDto: CreateMarcaDto) {
     return await this.MarcasService.create(MarcaDto);
   }
  
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.MarcasService.findOne(id);
   }
    
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.MarcasService.remove(id);
   }
  
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createMarcaDto:CreateMarcaDto, 
     ) {
       return this.MarcasService.update(id,createMarcaDto)
     }
   }