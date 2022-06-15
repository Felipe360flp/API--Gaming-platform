import { Injectable, NotAcceptableException, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/Create-User.dto';
import {UpdateUserDto} from './dto/update-User.dto';
import { Users } from './entities/Users.entity';
import { PrismaService } from '../prisma/prisma.service';
import { handleError } from 'src/Utils/handle-error.util';
import * as bcrypt from 'bcrypt';
import { Prisma, User } from '@prisma/client';
import { userInfo } from 'os';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService){}

  findAll(){
    return this.prisma.user.findMany();
  }

  async findById(id: string){
    const record = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`);
    }
    return record;
  }

  async findOne(id: string) {
    return this.findById(id);
  }

  async createADM(dto: CreateUserDto){
    const data: Prisma.UserCreateInput = {
      Name:dto.Name,
      Email:dto.Email,
      Password:await bcrypt.hash(dto.Password, 10),
      CPF:dto.CPF,
      isAdmin:true,
    }
    return this.prisma.user
      .create({
        data,
        select: {
          id:true,
          Name:true,
          Email:true,
          Password:true,
          CPF:true,
          isAdmin:true,
        }
      }).catch(handleError);
    }

    async create(dto: CreateUserDto){
      const data: Prisma.UserCreateInput = {
        Name:dto.Name,
        Email:dto.Email,
        Password:await bcrypt.hash(dto.Password, 10),
        CPF:dto.CPF,
        isAdmin:false,
      }
      return this.prisma.user
        .create({
          data,
          select: {
            id:true,
            Name:true,
            Email:true,
            Password:true,
            CPF:true,
            isAdmin:true,
          }
        }).catch(handleError);
      }



  async update(id: string, dto: UpdateUserDto){
    await this.findById(id);

    const data: Prisma.UserUpdateInput = {
      Name:dto.Name,
      Email:dto.Email,
      Password:await bcrypt.hash(dto.Password, 10),
      CPF:dto.CPF,
      isAdmin:false,
      profiles:{
        connect: dto.profiles.map((profileID) => ({
        id: profileID,
        })),
      }
    }

    return this.prisma.user
      .update({
  where: { id },
  data,
  select: {
    id: true,
    Name: true,
    Email: true,
    Password: true,
    CPF: true,
    isAdmin: true,
    profiles: {
      select: {
        Title: true
      }
    }
  },
}).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.user.delete({ where: { id } });
  }

}
