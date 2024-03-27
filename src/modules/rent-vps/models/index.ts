import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Service } from "src/modules/service/models";

@Table
export class RentVps extends Model<RentVps> {
    @Column
    title: string

    @Column
    perMonth: number

    @Column
    connect: string

    @Column
    core: number

    @Column
    ram: number

    @Column
    hdd: number

    @Column
    os: string

    @Column
    cPanel: string

    @Column
    option: string

    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @BelongsTo(() => Service)
    service: Service;
}