import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { GrassModule } from './grass/grass.module';
import { join } from 'path';
import { MeterModule } from './meter/meter.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env/default.env'],
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
    ScheduleModule.forRoot(),
    GrassModule,
    MeterModule,
  ],
})
export class AppModule {}
