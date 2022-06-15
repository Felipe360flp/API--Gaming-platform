import { Injectable, NotAcceptableException, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-Profiles.dto';
import { UpdateProfileDto} from './dto/update-profiles.dto'
import { Profile } from './entities/Profiles.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/Utils/handle-error.util';
import { Prisma } from '@prisma/client';


@Injectable()
export class ProfileService {

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.profile.findMany();
  }

  async findById(id: string){
    const record = await this.prisma.profile.findUnique({ where: { id }});

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }
    return record;
  }

  async findOne(id: string){
    return this.findById(id);
  }

  async create(dto: CreateProfileDto) {
    const data: Prisma.ProfileCreateInput = {
      Title:dto.Title,
      ImageURL:dto.ImageURL,
   }

   return this.prisma.profile
      .create({
        data,
        select: {
          id: true,
          Title:true,
          ImageURL:true,
        },
      }).catch(handleError);


  }

  async update(id: string, dto:UpdateProfileDto ){
    await this.findById(id);
    const data: Prisma.ProfileUpdateInput = {
      Title:dto.Title,
      ImageURL:dto.ImageURL,
    }

   return this.prisma.profile
   .update({
      where:{id},
      data,
      select: {
        id: true,
        Title:true,
        ImageURL:true,
      }
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.profile.delete({ where: { id } });
  }

}

