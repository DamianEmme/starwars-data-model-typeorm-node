import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from "typeorm"

import { Characters } from "./Characters"
import { Starships } from "./Starships"
import { Planets } from "./Planets"
import { User } from "./User"

@Entity()
export class Favorites extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userID: number;

    @ManyToOne(() => User, user => User.Favorites)
    user: User;
    static User: any

    @OneToMany(() => Characters, characters => Characters.Favorites)
    characters: Characters[];
    static Characters: any;

    @OneToMany(() => Planets, planets => Planets.Favorites)
    planets: Planets[];
    static Planets: any;

    @OneToMany(() => Starships, starships => Starships.Favorites)
    starships: Starships[];
    static Starships: any;
}