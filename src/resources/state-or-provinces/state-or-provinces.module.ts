import { Module } from '@nestjs/common';
import { StateOrProvincesService } from './state-or-provinces.service';
import { StateOrProvincesController } from './state-or-provinces.controller';

@Module({
  controllers: [StateOrProvincesController],
  providers: [StateOrProvincesService]
})
export class StateOrProvincesModule {}
