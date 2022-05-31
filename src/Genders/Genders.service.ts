import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-Genders.dto';
import { UpdateGenderDto } from './dto/update-Gender.dto';
import { Genders} from './entities/Genders.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { identity } from 'rxjs';
import { stringify } from 'querystring';


@Injectable()
export class GenderService {

  genders: Genders[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.gender.findMany();
  }

  async findOne(id: string): Promise<Genders> {
    const record = await this.prisma.gender.findUnique({ where: { id }});

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  create(createGenderDto: CreateGenderDto) {
    const gender: Genders = {...createGenderDto};

    return this.prisma.gender.create({data:gender,}).catch(this.handleError);
  }

  async update(id: string, dto: UpdateGenderDto): Promise<Genders> {
    await this.findOne(id);
    const data: Partial<Genders> = { ...dto };

    return this.prisma.gender.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findOne(id);
    await this.prisma.gender.delete({ where: { id } });
  }


  handleError(error: Error) {
    console.log(error.message);
    throw new UnprocessableEntityException(error.message);

    return undefined;
  }

}
