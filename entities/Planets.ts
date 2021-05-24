import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, ManyToOne, JoinTable} from "typeorm"
import {User} from "./User"
import {Characters} from "./Characters"

@Entity ()
export class Planets extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    img_URL: string

    @Column()
    population: number

    @Column()
    climate: string;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @ManyToOne(() => Characters, (characters: { planets: any }) => characters.planets)
    Characters: Characters;
    static Characters: any

}