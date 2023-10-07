import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, } from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class UsersImage {
    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;

    @Column({ type: 'varchar', nullable: true })
    url: string

//relaciones

//TODO: escribir una relacion que se llamara product

//muchas imagenes seran de un producto
@ManyToOne(() => Users, (users) => users.images, {
    onDelete: 'CASCADE',
})
users: Users;
}

