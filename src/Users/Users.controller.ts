import { Body,Controller,Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { exit } from 'process';
import { CreateUserDto } from './dto/Create-User.dto';
import {UpdateUserDto} from './dto/update-User.dto';
import { Users } from './entities/Users.entity';
import { UsersService } from './Users.service';

@ApiTags("Users")
@Controller("Users")
export class UsersController{
  constructor(private userService: UsersService){}

  @Get()
  findAll(){
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id:string):Promise<Users>{
    return this.userService.findOne(id)
  }

  @Post("create")
  createUser(@Body() createUserDto:CreateUserDto)
  {
    if(
      !createUserDto.name ||
      !createUserDto.CPF ||
      !createUserDto.Email||
      !createUserDto.Password
      ){
        return console.log("it is necessary to fill in all the fields!")
      }else{
        createUserDto.isAdmin=false;
        return this.userService.create(createUserDto)
      }
    }

    @Patch(':id')
      update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<Users> {
        return this.userService.update(id, dto);
      }

      @Delete(':id')
      @HttpCode(HttpStatus.NO_CONTENT)
      delete(@Param('id') id: string) {
      this.userService.delete(id);
  }

}


