import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Covering extends Model<Covering> {

    @Column
    type: string;
}