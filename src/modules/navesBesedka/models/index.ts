import { Column, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Service } from "src/modules/service/models";

@Table
export class Besedka extends Model<Besedka> {
    @Column
    title: string

    @Column
    description: string

    @Column
    img: string

    @Column
    price: number

    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @BelongsTo(() => Service)
    service: Service;
}