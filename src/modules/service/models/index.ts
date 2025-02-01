import { Column, Model, Table, HasMany } from "sequelize-typescript";
import { NavesHome } from "src/modules/navesHome/models";
import { Order } from "src/modules/order/model";

@Table
export class Service extends Model<Service> {
    @Column
    name: string;

    @Column
    description: string;

    @Column
    price: number;

    @Column
    url: string

    @HasMany(() => NavesHome)
    createSites: NavesHome[];

    @HasMany(() => Order, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    order: Order[];
}