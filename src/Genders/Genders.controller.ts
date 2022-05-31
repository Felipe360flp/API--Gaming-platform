import { Body,Controller, Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { prisma } from '@prisma/client';
import { exit } from 'process';
import { CreateGenderDto } from './dto/create-Genders.dto';
import { UpdateGenderDto } from './dto/update-Gender.dto';
import { Genders } from './entities/Genders.entity';
import { GenderService } from './Genders.service';

@ApiTags('Genders')
@Controller('Genders')
export class GenderController {
  constructor(private genderService: GenderService) {}

  @Get()
  findAll() {
    return this.genderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Genders> {
    return this.genderService.findOne(id);
  }

  @Post()
  create(@Body() createGenderDto: CreateGenderDto) {

    if(
      !createGenderDto.name
      ){
        return console.log("it is necessary to fill in all the fields!")
      }
      else{
      return this.genderService.create(createGenderDto);
      }
    }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGenderDto): Promise<Genders> {
    return this.genderService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.genderService.delete(id);
  }
}
