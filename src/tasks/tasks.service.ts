import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MeterService } from '../meter/meter.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  constructor(private meterService: MeterService) {}

  @Cron(CronExpression.EVERY_HOUR)
  async handleCron() {
    await this.meterService.registerMeter();
    this.logger.debug('registered current meter');
  }
}
