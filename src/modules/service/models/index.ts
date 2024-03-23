import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { Watchlist } from "../../watchlist/models/watchlist.model";

@Table
export class Service extends Model{
    @Column
    name: string

    @Column
    description: string

    @Column
    price: number
}