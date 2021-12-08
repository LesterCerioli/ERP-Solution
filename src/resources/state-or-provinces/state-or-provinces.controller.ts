import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StateOrProvincesService } from './state-or-provinces.service';
import { CreateStateOrProvinceDto } from './dto/create-state-or-province.dto';
import { UpdateStateOrProvinceDto } from './dto/update-state-or-province.dto';

@Controller('state-or-provinces')
export class StateOrProvincesController {
  constructor(private readonly stateOrProvincesService: StateOrProvincesService) {}

  @Post()
  create(@Body() createStateOrProvinceDto: CreateStateOrProvinceDto) {
    return this.stateOrProvincesService.create(createStateOrProvinceDto);
  }

  @Get()
  findAll() {
    return this.stateOrProvincesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stateOrProvincesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStateOrProvinceDto: UpdateStateOrProvinceDto) {
    return this.stateOrProvincesService.update(+id, updateStateOrProvinceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stateOrProvincesService.remove(+id);
  }
}
