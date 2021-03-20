import { Test, TestingModule } from '@nestjs/testing';
import { GrassController } from './grass.controller';

describe('GrassController', () => {
  let controller: GrassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrassController],
    }).compile();

    controller = module.get<GrassController>(GrassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
