import { Controller, Get, Header, Param } from '@nestjs/common';
import { GrassService } from './grass.service';
import { GrassIdPipe } from './pipe/grass-id.pipe';

@Controller('grass')
export class GrassController {
  constructor(private grassService: GrassService) {}

  @Get('/:id')
  async getGrass(@Param('id', GrassIdPipe) id: string) {
    return this.grassService.getGrass(id);
  }
}
