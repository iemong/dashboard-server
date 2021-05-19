import { HttpModule, Module } from '@nestjs/common';
import { MeterController } from './meter.controller';
import { MeterService } from './meter.service';

@Module({
  imports: [HttpModule],
  controllers: [MeterController],
  providers: [MeterService],
})
export class MeterModule {}
