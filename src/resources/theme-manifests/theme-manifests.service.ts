import { Injectable } from '@nestjs/common';
import { CreateThemeManifestDto } from './dto/create-theme-manifest.dto';
import { UpdateThemeManifestDto } from './dto/update-theme-manifest.dto';

@Injectable()
export class ThemeManifestsService {
  create(createThemeManifestDto: CreateThemeManifestDto) {
    return 'This action adds a new themeManifest';
  }

  findAll() {
    return `This action returns all themeManifests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} themeManifest`;
  }

  update(id: number, updateThemeManifestDto: UpdateThemeManifestDto) {
    return `This action updates a #${id} themeManifest`;
  }

  remove(id: number) {
    return `This action removes a #${id} themeManifest`;
  }
}
