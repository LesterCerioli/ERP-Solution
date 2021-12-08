import { Injectable } from '@nestjs/common';
import { CreateStateOrProvinceDto } from './dto/create-state-or-province.dto';
import { UpdateStateOrProvinceDto } from './dto/update-state-or-province.dto';

@Injectable()
export class StateOrProvincesService {
  create(createStateOrProvinceDto: CreateStateOrProvinceDto) {
    return 'This action adds a new stateOrProvince';
  }

  findAll() {
    return `This action returns all stateOrProvinces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stateOrProvince`;
  }

  update(id: number, updateStateOrProvinceDto: UpdateStateOrProvinceDto) {
    return `This action updates a #${id} stateOrProvince`;
  }

  remove(id: number) {
    return `This action removes a #${id} stateOrProvince`;
  }
}
