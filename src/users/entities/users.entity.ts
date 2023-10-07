import { Proveedor } from "src/products/entities/proveedor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersImage } from "./users-image.entity";
import { Category } from "src/products/entities/category.entity";



@Entity()
export class Users {
@PrimaryGeneratedColumn({type:'int4'}) 
id: number;

@Column({type: 'varchar', nullable: false})
name: string;

@Column({type: 'varchar', nullable: false})
email: string;

@Column({type: 'varchar', nullable: false})
password: string;

@Column({type: 'varchar', nullable: false})
sexo: string;

@Column({type: 'boolean', nullable: true})
active: boolean;

@Column({type: 'int4', nullable: false})
stock: number;

autor: Users;
@OneToMany(() => UsersImage, (userImage) => userImage.users, {
    cascade : true
})

images?: UsersImage[];


}

