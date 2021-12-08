import { Test, TestingModule } from '@nestjs/testing';
import { ThemeManifestsController } from './theme-manifests.controller';
import { ThemeManifestsService } from './theme-manifests.service';

describe('ThemeManifestsController', () => {
  let controller: ThemeManifestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThemeManifestsController],
      providers: [ThemeManifestsService],
    }).compile();

    controller = module.get<ThemeManifestsController>(ThemeManifestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
