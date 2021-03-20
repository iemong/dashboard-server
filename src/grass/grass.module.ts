import { Module } from '@nestjs/common';
import { GrassController } from './grass.controller';
import { GrassService } from './grass.service';

@Module({
  controllers: [GrassController],
  providers: [GrassService],
})
export class GrassModule {}
