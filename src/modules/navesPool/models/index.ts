import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Order } from "src/modules/order/model";
import { Service } from "src/modules/service/models";

@Table
export class NavesBool extends Model<NavesBool> {
    @Column
    title: string;

    @Column
    desc: string;

    @Column
    price: number;

    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @BelongsTo(() => Service)
    service: Service;
}