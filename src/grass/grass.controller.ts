import { Controller, Get } from '@nestjs/common';
import { GrassService } from './grass.service';

@Controller('grass')
export class GrassController {
  constructor(private grassService: GrassService) {}

  @Get()
  getGrass() {
    this.grassService.getGrass();
  }
}
