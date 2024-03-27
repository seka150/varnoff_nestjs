import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Service } from "src/modules/service/models";

@Table
export class Promotion extends Model<Promotion> {
    @Column
    title: string

    @Column
    delovoi: string

    @Column
    business: string

    @Column
    profi: string

    @Column
    lider: string

    @Column
    partner: string

    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @BelongsTo(() => Service)
    service: Service;
}