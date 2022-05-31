import { Injectable, NotAcceptableException, UnprocessableEntityException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-Profiles.dto';
import { UpdateProfileDto } from './dto/update-profiles.dto';
import { Profile } from './entities/Profiles.entity';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ProfileService {

  Profiles: Profile[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.profile.findMany();
  }

  async findOne(id: string): Promise<Profile> {
    const record = await this.prisma.profile.findUnique({ where: { id }});

    if (!record) {
      throw new NotAcceptableException(`Registro com o '${id}' não encontrado.`)
    }
    return record;
  }

  create(createProfileDto: CreateProfileDto) {
    const profile: Profile = {...createProfileDto};

    return this.prisma.profile.create({data:profile,}).catch(this.handleError);
  }

  async update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    await this.findOne(id);
    const data: Partial<Profile> = { ...dto };

    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.profile.delete({ where: { id } });
  }

  handleError(error: Error) {
    console.log(error.message);
    throw new UnprocessableEntityException(error.message);

    return undefined;
  }

}
