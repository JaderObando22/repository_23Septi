import { Injectable } from '@nestjs/common';
import { Users } from '../entities/users.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from '../dto/users.dto';
import { UsersImage } from '../entities/users-image.entity';


@Injectable()
export class UsersService{
  constructor(
    @InjectRepository(Users)
    private usersRepo: Repository<Users>,

    @InjectRepository(UsersImage)
    private userImageRepo: Repository<UsersImage>,

    private readonly dataSource: DataSource
  ){}

  async create (createUserDto: CreateUsersDto){
    const {images = [], ...detailUsers} = createUserDto;

    const user = await this.usersRepo.create({
      ...detailUsers,
      images:images.map((image) => 
       this.userImageRepo.create({url:image}))
    })

      await this.usersRepo.save(user);
      return user;
 }


    //Encontrar un user
    findOne(id: number){
        return this.usersRepo.findOne({  
            where:{id},
            relations:{
            autor:true
        }});
    }
    //mostrar todos los usuarios
    findAll(){
        return   this.usersRepo.find({
            order: {id: 'ASC'},
            relations:{
            images:true}
        });
    }
    //eliminar un usuario
    async remove(id:number){
        const user =await this.findOne(id);
        await this.usersRepo.remove(user);
        return 'Usuario eliminado';
    }

    //actualizar un usuario
    // async update(id: number, cambios: CreateUserDto){
    //     const oldUser = await this.findOne(id);
    //     const updateUser = await this.userRepo.merge(oldUser, cambios);
    //     return this.userRepo.save(updateUser);
    // }

    async update(id: number, usersDto: CreateUsersDto){
        const {images, ...updateAll} = usersDto
        const users = await this.usersRepo.preload({
            id:id,
            ... updateAll
        });

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        if(images){
            await queryRunner.manager.delete(UsersImage, {users: {id}});

            users.images = images.map((image)=>
                this.userImageRepo.create({url: image}),
            )

        }else{
            users.images =await this.userImageRepo.findBy({ users: {id}});
        }

        await queryRunner.manager.save(users);

        await queryRunner.commitTransaction();
        await queryRunner.release();

        return users;
    }
}