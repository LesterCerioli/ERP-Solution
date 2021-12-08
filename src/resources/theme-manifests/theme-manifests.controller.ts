import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThemeManifestsService } from './theme-manifests.service';
import { CreateThemeManifestDto } from './dto/create-theme-manifest.dto';
import { UpdateThemeManifestDto } from './dto/update-theme-manifest.dto';

@Controller('theme-manifests')
export class ThemeManifestsController {
  constructor(private readonly themeManifestsService: ThemeManifestsService) {}

  @Post()
  create(@Body() createThemeManifestDto: CreateThemeManifestDto) {
    return this.themeManifestsService.create(createThemeManifestDto);
  }

  @Get()
  findAll() {
    return this.themeManifestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.themeManifestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThemeManifestDto: UpdateThemeManifestDto) {
    return this.themeManifestsService.update(+id, updateThemeManifestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.themeManifestsService.remove(+id);
  }
}
