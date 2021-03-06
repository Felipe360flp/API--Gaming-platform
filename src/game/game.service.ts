import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';
import { handleError } from 'src/Utils/handle-error.util';
import { Gender, Prisma } from '@prisma/client';

@Injectable()
export class GameService {

  constructor(private readonly prisma: PrismaService) {}

    findAll() {
      return this.prisma.game.findMany()
    }

    findById(id: string){
      const record = this.prisma.game.findUnique({
        where: { id },
      });

      if (!record) {
        throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
      }
      return record;
    }

  async findOne(id: string){
    return await this.prisma.game.findUnique({where: {id}})
    }

  create(dto: CreateGameDto) {

    const data: Prisma.GameCreateInput = {
    Title:dto.Title,
    CoverImageUrl:dto.CoverImageUrl,
    Description:dto.Description,
    Year:dto.Year,
    ImdbScore:dto.ImdbScore,
    TrailerYouTubeUrl:dto.TrailerYouTubeUrl,
    GameplayYouTubeUrl:dto.GameplayYouTubeUrl,

      gender: {
        connect: {
          id: dto.gender.map((genderID) => ({
            id: genderID,
            })),
        }
      },
    }

    return this.prisma.game
      .create({
        data,
        select: {
          id: true,
          Title:true,
          CoverImageUrl:true,
          Description:true,
          Year:true,
          TrailerYouTubeUrl:true,
          GameplayYouTubeUrl:true,
          gender:{
            select:{
              Name:true
            }
          }
        }
      }).catch(handleError);
  }

   update(id: string,dto:UpdateGameDto){
   this.findById(id)
    const data: Prisma.GameUpdateInput = {
      Title:dto.Title,
      CoverImageUrl:dto.CoverImageUrl,
      Description:dto.Description,
      Year:dto.Year,
      ImdbScore:dto.ImdbScore,
      TrailerYouTubeUrl:dto.TrailerYouTubeUrl,
      GameplayYouTubeUrl:dto.GameplayYouTubeUrl,

      gender: {
        connect: {
          id: dto.gender.map((genderID) => ({
            id: genderID,
            })),
        }
      }
    }

    return this.prisma.game
      .update({
        where:{id},
        data,
        select: {
          id: true,
          Title:true,
          CoverImageUrl:true,
          Description:true,
          Year:true,
          TrailerYouTubeUrl:true,
          GameplayYouTubeUrl:true,
          gender:{
            select:{
              Name:true,
            }
          }
        },
      }).catch(handleError);
    }

    async delete(id: string) {
      await this.findById(id);

      await this.prisma.game.delete({ where: { id } });
    }

}
