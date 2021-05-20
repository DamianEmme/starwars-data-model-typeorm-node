import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm"
import {Favorites} from "./Favorites"
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

    @ManyToOne(() => Favorites, (favorites: { planets: any }) => favorites.planets)
    favorites: Favorites;
    static Favorites: any

    @ManyToOne(() => Characters, (characters: { planets: any }) => characters.planets)
    Characters: Characters;
    static Characters: any

}