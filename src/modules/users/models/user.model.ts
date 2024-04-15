import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Watchlist } from "../../watchlist/models/watchlist.model";

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column({
    defaultValue: UserRole.USER, 
  })
  role: UserRole;

  @HasMany(() => Watchlist, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  watchlist: Watchlist[];
}
