import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Covering } from "src/modules/covering/models";
import { Service } from "src/modules/service/models";
import { Status } from "src/modules/status/models";
import { User } from "src/modules/users/models/user.model";

@Table
export class Order extends Model<Order> {
    @Column
    length: number

    @Column
    width: number

    @Column
    height: number

    @ForeignKey(() => Status)
    @Column
    statusId: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @ForeignKey(() => Covering)
    @Column
    coveringId: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Service)
    service: Service;

    @BelongsTo(() => Status)
    status: Status;

    @BelongsTo(() => Covering)
    covering: Covering;
}
