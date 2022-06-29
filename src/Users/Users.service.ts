import { Injectable, NotAcceptableException, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/Create-User.dto';
import {UpdateUserDto} from './dto/update-User.dto';
import { PrismaService } from '../prisma/prisma.service';
import { handleError } from 'src/Utils/handle-error.util';
import * as bcrypt from 'bcrypt';
import { Prisma, User } from '@prisma/client';
import { userInfo } from 'os';
import { isAdmin } from 'src/Utils/is-admin.util';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService){}

  findAll(){
    return this.prisma.user.findMany({
      select:{
        id:true,
        Name:true,
        Password:false
      }
    });
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
    return await this.prisma.user.findUnique({
      where:{id},
      select:{
        id:true,
        Name:true,
        Password:false
      }
    });
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
            Password:false,
            CPF:false,
            isAdmin:false,
          }
        }).catch(handleError);
      }



  async update(id: string, dto: UpdateUserDto,user:User){
    isAdmin(user)

    const data: Prisma.UserUpdateInput = {
      Name:dto.Name,
      Email:dto.Email,
      Password:await bcrypt.hash(dto.Password, 10),
      CPF:dto.CPF,
      isAdmin:dto.isAdmin,
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
