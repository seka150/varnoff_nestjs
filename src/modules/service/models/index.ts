import { Column, Model, Table, HasMany } from "sequelize-typescript";
import { CreateSites } from "src/modules/create-sites/models";

@Table
export class Service extends Model<Service> {
    @Column
    name: string;

    @Column
    description: string;

    @Column
    price: number;

    @Column
    url: string

    @HasMany(() => CreateSites)
    createSites: CreateSites[];
}