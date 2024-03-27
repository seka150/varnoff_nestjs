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
import { WatchlistModule } from '../watchlist/watchlist.module';
import { Watchlist } from '../watchlist/models/watchlist.model';
import { ServiceModule } from '../service/service.module';
import { CreateSitesModule } from '../create-sites/create-sites.module';
import { Service } from '../service/models';
import { CreateSites } from '../create-sites/models';
import { Domen } from '../domen/models';
import { DomenModule } from '../domen/domen.module';
import { Host } from '../host/models';
import { HostModule } from '../host/host.module';
import { RentServer } from '../rent-server/models';
import { RentServerModule } from '../rent-server/rent-server.module';
import { RentVps } from '../rent-vps/models';
import { RentVpsModule } from '../rent-vps/rent-vps.module';
import { Promotion } from '../promotion-site/models';
import { PromotionModule } from '../promotion-site/promotion.module';
import { SSL } from '../ssl/models';
import { SslModule } from '../ssl/ssl.module';



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
      models: [User, Watchlist, Service, CreateSites, Domen, Host, RentServer, RentVps, Promotion, SSL]
    })
  }),
  UsersModule,
  AuthModule,
  TokenModule,
  WatchlistModule,
  ServiceModule,
  CreateSitesModule,
  DomenModule,
  HostModule,
  RentServerModule,
  RentVpsModule,
  PromotionModule,
  SslModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
