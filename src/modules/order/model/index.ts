import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Service } from "src/modules/service/models";
import { User } from "src/modules/users/models/user.model";

@Table
export class Order extends Model<Order> {
    @Column
    status: string 

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
}
