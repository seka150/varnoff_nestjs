import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Order } from "src/modules/order/model";

@Table
export class Covering extends Model<Covering> {

    @Column
    type: string;

    @HasMany(() => Order, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      order: Order[];
}