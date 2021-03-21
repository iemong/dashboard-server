import { HttpModule, Module } from '@nestjs/common';
import { GrassController } from './grass.controller';
import { GrassService } from './grass.service';

@Module({
  imports: [HttpModule],
  controllers: [GrassController],
  providers: [GrassService],
})
export class GrassModule {}
