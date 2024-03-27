import { Table, Model, ForeignKey, BelongsTo, Column } from "sequelize-typescript";
import { Service } from "src/modules/service/models";
import { CreateSites } from ".";


@Table
export class ServiceCreateSites extends Model<ServiceCreateSites> {
    @ForeignKey(() => Service)
    @Column
    serviceId: number;

    @ForeignKey(() => CreateSites)
    @Column
    createSitesId: number;

    @BelongsTo(() => Service)
    service: Service;

    @BelongsTo(() => CreateSites)
    createSites: CreateSites;
}
