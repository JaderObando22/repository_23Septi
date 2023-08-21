import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from '../../users/entities/users.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn({type: 'int4' }) //este decorador hace referencia al primari key
    id?: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    description: string;

    @Column({ type: 'int4', nullable: false})
    price: number;

    @Column({ type: 'int4', nullable: false})
    stock: number;  

   

    @Column({ type: 'int4', nullable: false})
    Users_id: number;

    //relaciones

    @ManyToOne(() => Users)
    @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el ide del usuario
   })
    autor: Users;



    
   
}




    

