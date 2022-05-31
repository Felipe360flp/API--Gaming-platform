import { Injectable, NotAcceptableException, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/Create-User.dto';
import {UpdateUserDto} from './dto/update-User.dto';
import { Users } from './entities/Users.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService{
  users: Users[] = [];

  constructor(private readonly prisma: PrismaService){}

  findAll(){
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<Users> {
    const record = await this.prisma.user.findUnique({ where: { id }});

    if (!record) {
      throw new NotAcceptableException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  create(createUserDto: CreateUserDto) {
    const user: Users = {...createUserDto};

    return this.prisma.user.create({data:user}).catch(this.handleError);
  }

  async update(id: string, dto: UpdateUserDto): Promise<Users> {
    await this.findOne(id);
    const data: Partial<Users> = { ...dto };

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }

  handleError(error: Error) {
    console.log(error.message);
    throw new UnprocessableEntityException(error.message);

    return undefined;
  }

}
