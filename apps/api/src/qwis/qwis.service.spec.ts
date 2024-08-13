import { Test, TestingModule } from '@nestjs/testing';
import { QwisService } from './qwis.service';

describe('QwisService', () => {
  let service: QwisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QwisService],
    }).compile();

    service = module.get<QwisService>(QwisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
