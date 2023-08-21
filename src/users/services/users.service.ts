import { Injectable } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from '../dto/users.dto';







@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepo: Repository<Users>,
  ) {}

  
  async create( createUsersDto: CreateUsersDto){
    const users = this.usersRepo.create(createUsersDto);
   await this.usersRepo.save(users);

    return Users;
  }

    
    findOne(id: number){
      return this.usersRepo.findOneBy({id});
    }


    findAll(){
      return this.usersRepo.find({
       order: {id: 'ASC' }, 
      });
    }

    
    async remove(id: number){
      const Users = await this.findOne(id);
      await this.usersRepo.remove(Users);
      return 'Este usurio sera eliminado satisfactoriamente';
    }

    
    async update(id: number, cambios: CreateUsersDto){
      const oldUsers = await this.findOne(id);
     const updateUsers = await this.usersRepo.merge(oldUsers,cambios);
      return this.usersRepo.save(updateUsers);
    }
 
  }