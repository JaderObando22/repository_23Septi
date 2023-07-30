import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
@PrimaryGeneratedColumn({type:'int4'}) //este decorador hac referencia al primary key
id: number;

@Column({type: 'string', nullable: false})
name: string;

@Column({type: 'string', nullable: false})
password: string;

@Column({type: 'string', nullable: false})
email: string;

@Column({type: 'string', nullable: false})
sexo: string;

@Column({type: 'boolean', default: true})
active: boolean;

}