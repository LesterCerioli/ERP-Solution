import { Test, TestingModule } from '@nestjs/testing';
import { ThemeManifestsService } from './theme-manifests.service';

describe('ThemeManifestsService', () => {
  let service: ThemeManifestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemeManifestsService],
    }).compile();

    service = module.get<ThemeManifestsService>(ThemeManifestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
