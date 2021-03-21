import { BadRequestException, PipeTransform } from '@nestjs/common';

export class GrassIdPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value !== 'string') {
      throw new BadRequestException();
    }
    return value;
  }
}
