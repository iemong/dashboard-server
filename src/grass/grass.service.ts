import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class GrassService {
  constructor(private httpService: HttpService) {}
  async getGrass(id: string) {
    const res = await this.httpService
      .get(`https://pmgh.vercel.app/${id}`, {
        headers: {
          'Content-Type': 'image/jpeg',
        },
        responseType: 'arraybuffer',
      })
      .toPromise();
    return 'data:image/jpeg;base64,' + base64Encode(res.data);
  }
}

function base64Encode(imgData) {
  return imgData.toString('base64');
}
