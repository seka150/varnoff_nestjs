import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Service } from "src/modules/service/models";

@Table
export class Domen extends Model<Domen> {
    @Column
    zone: string;

    @Column
    register: number;

    @Column
    continue: number;

    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @BelongsTo(() => Service)
    service: Service;
}