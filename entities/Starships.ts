import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm"
import {Favorites} from "./Favorites"

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

    @ManyToOne(() => Favorites, (favorites: { starships: any }) => favorites.starships)
    favorites: Favorites;
    static Favorites: any


}