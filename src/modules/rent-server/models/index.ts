import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Order } from "src/modules/order/model";
import { Service } from "src/modules/service/models";

@Table
export class RentServer extends Model<RentServer> {
    @Column
    title: string;

    @Column
    description: string;

    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @BelongsTo(() => Service)
    service: Service;
}