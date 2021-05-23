import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { Meter, Prisma } from '@prisma/client';

type Response = {
  statusCode: number;
  body: {
    deviceId: string;
    deviceType: string;
    hubDeviceId: string;
    humidity: number;
    temperature: number;
  };
};

export type MeterParams = Partial<{
  skip: number;
  take: number;
  cursor: Prisma.MeterWhereUniqueInput;
  where: Prisma.MeterWhereInput;
  orderBy: Prisma.MeterOrderByInput;
}>;

@Injectable()
export class MeterService {
  private readonly token: string;
  private readonly deviceId: string;
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    private prismaService: PrismaService,
  ) {
    this.token = configService.get<string>('SWITCH_BOT_TOKEN');
    this.deviceId = configService.get<string>('SWITCH_BOT_DEVICE_ID');
  }
  private async fetchMeter() {
    const res = await this.httpService
      .get<Response>(
        `https://api.switch-bot.com/v1.0/devices/${this.deviceId}/status`,
        {
          headers: {
            Authorization: this.token,
          },
        },
      )
      .toPromise();

    return res.data;
  }

  async createMeter(data: Prisma.MeterCreateInput): Promise<Meter> {
    return this.prismaService.meter.create({ data });
  }

  async registerMeter() {
    const res = await this.fetchMeter();
    const data = res.body;
    return this.createMeter(data);
  }

  async meter(
    meterWhereUniqueInput: Prisma.MeterWhereUniqueInput,
  ): Promise<Meter | null> {
    return this.prismaService.meter.findUnique({
      where: meterWhereUniqueInput,
    });
  }

  async meters(params: MeterParams): Promise<Meter[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prismaService.meter.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async updateMeter(params: {
    where: Prisma.MeterWhereUniqueInput;
    data: Prisma.MeterUpdateInput;
  }): Promise<Meter> {
    const { where, data } = params;
    return this.prismaService.meter.update({
      data,
      where,
    });
  }

  async deleteMeter(where: Prisma.MeterWhereUniqueInput): Promise<Meter> {
    return this.prismaService.meter.delete({
      where,
    });
  }
}
