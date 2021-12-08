import { PartialType } from '@nestjs/mapped-types';
import { CreateStateOrProvinceDto } from './create-state-or-province.dto';

export class UpdateStateOrProvinceDto extends PartialType(CreateStateOrProvinceDto) {}
