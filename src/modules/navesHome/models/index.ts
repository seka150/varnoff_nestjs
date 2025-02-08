import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Order } from "src/modules/order/model";
import { Service } from "src/modules/service/models";

@Table
export class NavesHome extends Model<NavesHome> {
    @Column
    title: string;

    @Column
    description: string;

    @Column
    img: string;

    @Column
    price:number;

    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @BelongsTo(() => Service)
    service: Service;
}