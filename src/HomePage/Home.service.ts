import { Injectable, NotAcceptableException, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { Profile } from 'src/Profiles/entities/Profiles.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class HomePageService {

  constructor(private readonly prisma: PrismaService) {}

  async favoriteGameByProfile(id: string){
    const record = await this.prisma.profile.findUnique({ where: { id }});

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }
    return this.prisma.profile
    .findUnique({
      Where: { id },
      include:{
        id: true,
        user: {
          select: {
            Name: true,
          },
        },
        games: {
          select: {
            Title: true,
          },
        },
      }
    });
  }
}
