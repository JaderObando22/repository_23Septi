import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,  } from 'typeorm';
import { CreateCategoryDto, } from '../dto/category.dto';


@Entity()
export class Category  {
    @PrimaryGeneratedColumn({ type: 'int4'})
    id?: number;

    @Column({ type: 'varchar', nullable: false })
    user_id: number;

    @Column({ type: 'varchar', nullable: false })
    categoria: string;

    @Column({ type: 'int4', nullable: false })
    created_at: Date;

    //relaciones

    @ManyToOne(() => Category)
    @JoinColumn({
    name: 'user_id', //el campo que relaciona a mi tabla
    referencedColumnName: 'id' //este es el id del usuario
   })
    autor: Category;
    
}