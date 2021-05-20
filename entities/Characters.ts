import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm"
import { Favorites } from "./Favorites"
import { Planets } from "./Planets"

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

    @ManyToOne(() => Favorites, favorites => favorites.characters)
    favorites: Favorites;
    static Favorites: any

    @OneToMany(() => Planets, planets => Planets.Characters)
    planets: Planets[];
    static Planets: any;

}