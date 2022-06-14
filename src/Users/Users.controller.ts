import { Body,Controller,Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus,UseGuards} from '@nestjs/common';
import { ApiTags,ApiOperation,ApiBearerAuth} from '@nestjs/swagger';
import { exit } from 'process';
import { CreateUserDto } from './dto/Create-User.dto';
import {UpdateUserDto} from './dto/update-User.dto';
import { Users } from './entities/Users.entity';
import { UserService } from './Users.service';
import { AuthGuard } from '@nestjs/passport';


@ApiTags("Users")
@Controller("Users")
export class UsersController{
  constructor(private userService: UserService){}

  @Get()
  @ApiOperation({
    summary: 'Localizar todos os usuários',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findAll(){
    return this.userService.findAll();
  }

  @Get(":id")
  @ApiOperation({
    summary: 'Localizar um usuário',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findOne(@Param("id") id:string):Promise<Users>{
    return this.userService.findOne(id)
  }

  @Post("create")
  @ApiOperation({
    summary: 'Criar um usuário',
  })
  createUser(@Body() createUserDto:CreateUserDto)
  {
    if(
      !createUserDto.Name ||
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
    @ApiOperation({
      summary: 'Alterar um usuário',
    })
      @UseGuards(AuthGuard())
      @ApiBearerAuth()
      update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<Users> {
        return this.userService.update(id, dto);
      }

      @Delete(':id')
      @ApiOperation({
        summary: 'Deletar um usuário',
      })
      @HttpCode(HttpStatus.NO_CONTENT)
      @UseGuards(AuthGuard())
      @ApiBearerAuth()
      delete(@Param('id') id: string) {
      this.userService.delete(id);
  }

}


