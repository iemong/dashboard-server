import { Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('/meter/all')
  async getMeters() {
    return this.apiService.getMeters();
  }

  @Get('/meter/today')
  async getMetersPerToday() {
    return this.apiService.getMetersPerToday();
  }

  @Post('/meter/add')
  async registerMeter() {
    return this.apiService.registerMeter();
  }
}
