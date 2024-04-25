import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Status extends Model<Status> {

    @Column
    status: string;
}