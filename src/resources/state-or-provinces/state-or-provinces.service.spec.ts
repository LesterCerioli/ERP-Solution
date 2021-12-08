import { Test, TestingModule } from '@nestjs/testing';
import { StateOrProvincesService } from './state-or-provinces.service';

describe('StateOrProvincesService', () => {
  let service: StateOrProvincesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StateOrProvincesService],
    }).compile();

    service = module.get<StateOrProvincesService>(StateOrProvincesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
