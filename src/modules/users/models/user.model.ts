import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "src/modules/order/model";

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

  @HasMany(() => Order, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  order: Order[];
}
