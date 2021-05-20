import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable, OneToMany
  } from 'typeorm';
  import {Favorites} from "./Favorites"
  
  // import {Planet} from "./Planet"
  @Entity()
  export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    first_name: string;
  
    @Column()
    last_name: string;
  
    @Column({unique: true})
    email: string;
  
    @Column({unique: true})
    password: string;

    @OneToMany(() => Favorites, favorites => Favorites.User)
    favorites: Favorites[];
      static Favorites: any;

    // @ManyToMany(() => Planet)
    // @JoinTable()
    // planets: Planet[];
    
  }