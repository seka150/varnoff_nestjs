import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import configurations from 'src/configurations';
import { User } from '../users/models/user.model';
import { AuthModule } from '../auth/auth.module';
import { TokenModule } from '../token/token.module';
import { ServiceModule } from '../service/service.module';
import { CreateSitesModule } from '../navesHome/home.module';
import { Service } from '../service/models';
import { NavesHome } from '../navesHome/models';
import { NavesBool } from '../navesPool/models';
import { NavesBoolModule } from '../navesPool/pool.module';
import { Conopies} from '../navesCanopies/models';
import { ConopiesModule} from '../navesCanopies/conopies.module';
import { Terrasa } from '../navesTerrasa/models';
import { TerrasaModule } from '../navesTerrasa/terrasa.module';
import { Parking } from '../navesParking/models';
import { ParkingModule } from '../navesParking/parking.module';
import { Besedka } from '../navesBesedka/models';
import { BesedkaModule } from '../navesBesedka/besedka.module';
import { NavesDacha } from '../navesDacha/models';
import { NavesDachaModule } from '../navesDacha/dacha.module';
import { Order } from '../order/model';
import { OrderModule } from '../order/order.module';
import { Status } from '../status/models';
import { StatusModule } from '../status/status.module';
import { Avto } from '../navesAvto/model';
import { AvtoModule } from '../navesAvto/avto.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configurations]
  }), 
  SequelizeModule.forRootAsync({
    imports:[ConfigModule],
    inject: [ConfigService],
    useFactory: (configService : ConfigService) => ({
      dialect: "postgres",
      host: configService.get('db_host'),
      port: configService.get('db_port'),
      username: configService.get('db_user'),
      password: configService.get('db_password'),
      database: configService.get('db_name'),
      synchronize: true,
      autoLoadModels: true,
      models: [User, Service, NavesHome, NavesBool, Conopies, Terrasa, Parking, Besedka, NavesDacha, Order, Status, Avto]
    })
  }),
  UsersModule,
  AuthModule,
  TokenModule,
  ServiceModule,
  CreateSitesModule,
  NavesBoolModule,
  ConopiesModule,
  TerrasaModule,
  ParkingModule,
  BesedkaModule,
  NavesDachaModule,
  OrderModule,
  StatusModule, 
  AvtoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
