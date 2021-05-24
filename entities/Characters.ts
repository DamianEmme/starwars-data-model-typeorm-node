import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, OneToMany, JoinTable } from "typeorm"
import { Planets } from "./Planets"
import { User } from "./User"

@Entity()
export class Characters extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    img_URL: string

    @Column()
    height: number

    @Column()
    mass: number

    @Column()
    birth_year: number

    @Column()
    url: string

    @Column()
    planetId: number;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @OneToMany(() => Planets, planets => Planets.Characters)
    planets: Planets[];
    static Planets: any;

}