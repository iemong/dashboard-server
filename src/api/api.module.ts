import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { MeterModule } from '../meter/meter.module';

@Module({
  imports: [MeterModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
