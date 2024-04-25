import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Service } from "src/modules/service/models";
import { Status } from "src/modules/status/models";
import { User } from "src/modules/users/models/user.model";

@Table
export class Order extends Model<Order> {
    @Column
    title: string;

    @Column
    description: string;

    @ForeignKey(() => Status)
    @Column
    statusId: number;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Service)
    service: Service;

    @BelongsTo(() => Status)
    status: Status;
}
