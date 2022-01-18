import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { config } from './libs/config/app.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigFactory } from './libs/config/typeorm-factory.config';
import { ExperienceModule } from './module/experience/experience.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigFactory,
    }),
    ExperienceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
