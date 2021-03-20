import { Injectable } from '@nestjs/common';

@Injectable()
export class GrassService {
  getGrass() {
    return 'success';
  }
}
