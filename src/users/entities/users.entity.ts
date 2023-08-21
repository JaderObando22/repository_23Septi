import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



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

}

