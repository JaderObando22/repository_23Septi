import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,  } from 'typeorm';
import { CreateCategoryDto, } from '../dto/category.dto';
import { Users } from 'src/users/entities/users.entity';


@Entity()
export class Category  {
    @PrimaryGeneratedColumn({ type: 'int4'})
    id?: number;

    @Column({ type: 'varchar', nullable: false })
    user_id: number;

    @Column({ type: 'varchar', nullable: false })
    categoria: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP '})
    created_at: Date


    //relaciones

    @ManyToOne(() => Users)
    @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el id del usuario
   })
    autor: Users;
    
}