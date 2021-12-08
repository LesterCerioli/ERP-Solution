import { Test, TestingModule } from '@nestjs/testing';
import { StateOrProvincesController } from './state-or-provinces.controller';
import { StateOrProvincesService } from './state-or-provinces.service';

describe('StateOrProvincesController', () => {
  let controller: StateOrProvincesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StateOrProvincesController],
      providers: [StateOrProvincesService],
    }).compile();

    controller = module.get<StateOrProvincesController>(StateOrProvincesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
