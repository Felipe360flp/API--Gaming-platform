import { Body,Controller, Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags,ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { prisma } from '@prisma/client';
import { IsUppercase } from 'class-validator';
import { exit } from 'process';
import { CreateGenderDto } from './dto/create-Genders.dto';
import { UpdateGenderDto } from './dto/update-Gender.dto';
import { Genders } from './entities/Genders.entity';
import { GenderService } from './Genders.service';

@ApiTags('Genders')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('Genders')
export class GenderController {
  constructor(private genderService: GenderService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os gêneros disponíveis aos jogos',
  })
  findAll() {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Localizar um gênero',
  })
  findOne(@Param('id') id: string){
    return this.genderService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Adicionar um gênero',
  })
  @IsUppercase()
  create(@Body() createGenderDto: CreateGenderDto) {

    if(
      !createGenderDto.Name
      ){
        return console.log("it is necessary to fill in all the fields!")
      }
      else{
      return this.genderService.create(createGenderDto);
      }
  }

  @IsUppercase()
  @Patch(':id')
  @ApiOperation({
    summary: 'Alterar um gênero',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGenderDto){
    return this.genderService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um gênero',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.genderService.delete(id);
  }
}
