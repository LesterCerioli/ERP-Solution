import { PartialType } from '@nestjs/mapped-types';
import { CreateThemeManifestDto } from './create-theme-manifest.dto';

export class UpdateThemeManifestDto extends PartialType(CreateThemeManifestDto) {}
