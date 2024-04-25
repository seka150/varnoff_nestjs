import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Order } from "src/modules/order/model";
import { Service } from "src/modules/service/models";

@Table
export class Host extends Model<Host> {
    @Column
    option: string;

    @Column
    practical: string;

    @Column
    comfort: string;

    @Column
    perfect: string;

    @Column
    exclusive: string;

    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @BelongsTo(() => Service)
    service: Service;
}