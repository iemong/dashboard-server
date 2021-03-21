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
      })
      .toPromise();
    console.log(res);
    return res.data;
  }
}
