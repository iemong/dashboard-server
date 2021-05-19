import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

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

@Injectable()
export class MeterService {
  private readonly token: string;
  private readonly deviceId: string;
  constructor(private httpService: HttpService) {
    const configService = new ConfigService();
    this.token = configService.get<string>('SWITCH_BOT_TOKEN');
    this.deviceId = configService.get<string>('SWITCH_BOT_DEVICE_ID');
  }
  async getMeter() {
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
}
