import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { UsersController } from './controllers/users.controllers';
import { UsersService } from './services/users.service';
import { UsersImage } from './entities/users-image.entity';



@Module({
    imports: [TypeOrmModule.forFeature([Users,UsersImage])],
    controllers: [UsersController],
    providers: [UsersService],
   
})
export class UsersModule{}