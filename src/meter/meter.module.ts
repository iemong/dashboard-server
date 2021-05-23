import { HttpModule, Module } from '@nestjs/common';
import { MeterService } from './meter.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [HttpModule, PrismaModule],
  providers: [MeterService],
  exports: [MeterService],
})
export class MeterModule {}
