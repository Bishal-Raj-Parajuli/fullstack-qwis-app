import { Test, TestingModule } from '@nestjs/testing';
import { QwisController } from './qwis.controller';
import { QwisService } from './qwis.service';

describe('QwisController', () => {
  let controller: QwisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QwisController],
      providers: [QwisService],
    }).compile();

    controller = module.get<QwisController>(QwisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
