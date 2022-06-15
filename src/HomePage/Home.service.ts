import { Injectable, NotAcceptableException, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Profile } from 'src/Profiles/entities/Profiles.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { handleError } from 'src/Utils/handle-error.util';
import { addGameByProfile } from 'src/HomePage/dto/adGameByProfile.dto';
import { stringify } from 'querystring';

@Injectable()
export class HomePageService {

  constructor(private readonly prisma: PrismaService) {}

  async findhomePageByProfile(id: string){
   await this.prisma.profile.findUnique({ where: {id}});

    if (!id) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }
    else{
      return this.prisma.profile
      .findUnique({
        where: {id},
        select:{
          id:true,
          games: {
            select: {
              id: true,
              Title:true,
              CoverImageUrl:true,
              Description:true,
              Year:true,
              ImdbScore:true,
              TrailerYouTubeUrl:true,
              GameplayYouTubeUrl:true,
            },
          },

        },
      });
    }
  }

  async addGameByProfile(dto: addGameByProfile) {
    const data: Prisma.ProfileCreateInput = {
      id:dto.gameID,
      games: {
        connect: {
          id:dto.gameID
        }
      },
    }

   return this.prisma.profile
      .create({
        data,
        select: {
          id: true,
          Title:true,
          games:{
            select:{
              id: true,
              Title:true,
              CoverImageUrl:true,
              Description:true,
              Year:true,
              ImdbScore:true,
              TrailerYouTubeUrl:true,
              GameplayYouTubeUrl:true,
            }
          }
        },
      }).catch(handleError);
  }
}
