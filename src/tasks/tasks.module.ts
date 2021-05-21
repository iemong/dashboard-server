import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { MeterModule } from '../meter/meter.module';

@Module({
  imports: [MeterModule],
  providers: [TasksService],
})
export class TasksModule {}
