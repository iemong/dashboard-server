import { Injectable } from '@nestjs/common';
import { MeterService } from '../meter/meter.service';

@Injectable()
export class ApiService {
  constructor(private meterService: MeterService) {}

  getMeters() {
    return this.meterService.meters({});
  }

  async registerMeter() {
    return this.meterService.registerMeter();
  }
}
