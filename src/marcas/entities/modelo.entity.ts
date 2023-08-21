import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,  } from 'typeorm';
import { Users } from '../../users/entities/users.entity';


@Entity()
export class Modelo  {
    @PrimaryGeneratedColumn({type: 'int4' }) //este decorador hace referencia al primari key
    id?: number;

    @Column({ type: 'varchar', length: 60, nullable: false })
     nombre: string;

     @Column({ type: 'varchar', length: 60, nullable: false })
     marca_id: string;

    @Column({ type:'int4', nullable: false})
    user_id: number;

    //relaciones

    @ManyToOne(() => Modelo)
    @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el id del usuario
   })
    autor: Modelo;
    
}