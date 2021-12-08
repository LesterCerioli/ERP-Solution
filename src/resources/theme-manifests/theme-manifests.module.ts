import { Module } from '@nestjs/common';
import { ThemeManifestsService } from './theme-manifests.service';
import { ThemeManifestsController } from './theme-manifests.controller';

@Module({
  controllers: [ThemeManifestsController],
  providers: [ThemeManifestsService]
})
export class ThemeManifestsModule {}
