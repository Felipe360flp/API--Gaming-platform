import { Body,Controller,Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus,UseGuards} from '@nestjs/common';
import { ApiTags,ApiOperation,ApiBearerAuth} from '@nestjs/swagger';
import { exit } from 'process';
import { CreateUserDto } from './dto/Create-User.dto';
import {UpdateUserDto} from './dto/update-User.dto';
import { Users } from './entities/Users.entity';
import { UserService } from './Users.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { isAdmin } from 'src/Utils/is-admin.util';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { changePass } from './dto/change-pass.dto';
import { use } from 'passport';


@ApiTags("Users")
@Controller("Users")
export class UsersController{
  constructor(private userService: UserService){}

  /**
   * Recebe uma requisição GET e retorna um objeto de status
   * da aplicação com a URL de documentação
   * @param req Objeto de Request do Express
   * @returns Objeto de status da aplicação
   */

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
    return this.userService.findById(id)
  }

  @Post("create/adm")
  @ApiOperation({
    summary: 'Cadastrar um usuário de nível ADM',
  })
  createAdmin(@Body() createUserDto:CreateUserDto)
  {
    if(
      !createUserDto.Name ||
      !createUserDto.CPF ||
      !createUserDto.Email||
      !createUserDto.Password
      ){
        return console.log("it is necessary to fill in all the fields!")
      }else{
        return this.userService.createADM(createUserDto)
      }
    }


  @Post("create")
  @ApiOperation({
    summary: 'Cadastrar um usuário',
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
        return this.userService.create(createUserDto)
      }
    }

    @Patch(':id')
    @ApiOperation({
      summary: 'Alterar um usuário',
    })
      @UseGuards(AuthGuard())
      @ApiBearerAuth()
      update(@Param('id') id: string,
      @Body() dto: UpdateUserDto,
      @LoggedUser() user:User,
      ){
        return this.userService.update(id,dto,user);
      }

      @Delete(':id')
      @ApiOperation({
        summary: 'Deletar um usuário',
      })
      @HttpCode(HttpStatus.NO_CONTENT)
      @UseGuards(AuthGuard())
      @ApiBearerAuth()
      delete(@Param('id') id: string,@LoggedUser() user:User){ // Usar este de exemplo para implementar o restante
      isAdmin(user);
      this.userService.delete(id);
  }

}


