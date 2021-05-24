import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne, JoinTable} from "typeorm"
import {User} from "./User"

@Entity ()
export class Starships extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    img_URL: string

    @Column()
    model: string

    @Column()
    cost: number;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

}