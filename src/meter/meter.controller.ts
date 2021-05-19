import { Controller, Get } from '@nestjs/common';
import { MeterService } from './meter.service';

@Controller('meter')
export class MeterController {
  constructor(private meterService: MeterService) {}

  @Get('/')
  async getMeter() {
    return this.meterService.getMeter();
  }
}
