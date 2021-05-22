import { Injectable } from '@nestjs/common';
import { MeterParams, MeterService } from '../meter/meter.service';

@Injectable()
export class ApiService {
  constructor(private meterService: MeterService) {}

  getMeters() {
    return this.meterService.meters({});
  }

  getMetersPerToday() {
    const today = new Date();
    return this.meterService.meters({
      where: {
        createdAt: {
          gte: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - 1,
          ),
          lt: today,
        },
      },
    });
  }

  async registerMeter() {
    return this.meterService.registerMeter();
  }
}
