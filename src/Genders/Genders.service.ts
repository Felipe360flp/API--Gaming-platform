import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-Genders.dto';
import { UpdateGenderDto } from './dto/update-Gender.dto';
import { Genders} from './entities/Genders.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { identity } from 'rxjs';
import { stringify } from 'querystring';
import { handleError } from 'src/Utils/handle-error.util';
import { Prisma } from '@prisma/client';
import { isUppercase } from 'class-validator';
import { CreateGameDto } from 'src/game/dto/create-game.dto';


@Injectable()
export class GenderService {

  genders: Genders[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.gender.findMany();
  }

  async findById(id: string){
    const record = await this.prisma.gender.findUnique({ where: { id }});

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  async findOne(id: string){
    return this.findById(id);
  }

  async create(dto: CreateGenderDto) {
    const data: Prisma.GenderCreateInput = {
      Name:dto.Name
    }

    return this.prisma.gender
      .create({
        data,
        select: {
          id: true,
          Name:true
        }
      }).catch(handleError);
  }



    async update(id: string, dto: UpdateGenderDto){
    await this.findOne(id);
    const data: Prisma.GenderUpdateInput = {
      Name:dto.Name,
    }

    return this.prisma.gender
    .update({
      where: { id },
      data,
      select: {
        id: true,
        Name: true,
        games: {
          select: {
            Title: true
          }
        }
      },
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.gender.delete({ where: { id } });
  }

}
