import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "src/modules/order/model";

@Table
export class Status extends Model<Status> {

    @Column
    status: string;

    @HasMany(() => Order, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      order: Order[];
}