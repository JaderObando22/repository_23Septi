import { Controller,
    Post,
     Body, 
     Get, 
     Param,
     ParseIntPipe,
     Delete, 
     Patch,
     } from '@nestjs/common';
import { CreateUsersDto } from '../dto/users.dto';
import { UsersService } from '../services/users.service';



 
 @Controller('Users')
 export class UsersController {
   constructor(private readonly UserService: UsersService) {}
 
   @Post()
   async create(@Body() usersDto: CreateUsersDto ) {
     return await this.UserService.create(usersDto);
   }

   @Get() 
   findAll() { 
     return this.UserService.findAll();
   }
 
   @Get(':id')
   finOne( @Param('id', ParseIntPipe)  id: number) {
     return this.UserService.findOne(id);
   }
    
 
   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
    return this.UserService.remove(id);
   }
 
   
   @Patch(':id')
   update( 
     @Param('id', ParseIntPipe) id: number,
     @Body() createUsersDto:CreateUsersDto, 
     ) {
       return this.UserService.update(id,createUsersDto)
     }
   }