import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GrassModule } from './grass/grass.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env/default.env'],
      isGlobal: true,
    }),
    GrassModule,
  ],
})
export class AppModule {}
