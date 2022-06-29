import { Body,Controller, Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags,ApiOperation, ApiBearerAuth} from '@nestjs/swagger';
import { profile } from 'console';
import { exit } from 'process';
import { CreateProfileDto } from './dto/create-Profiles.dto';
import { UpdateProfileDto } from './dto/update-profiles.dto';
import { Profile } from './entities/Profiles.entity';
import { ProfileService } from './Profiles.service';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { Users } from 'src/Users/entities/Users.entity';
import { User } from '@prisma/client';
import { isAdmin } from 'src/Utils/is-admin.util';

@ApiTags('Profiles')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('Profiles')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  @ApiOperation({
    summary: 'Localizar  lista de perfis cadastrados',
  })
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Localizar um perfil',
  })
  findOne(@Param('id') id: string){
    return this.profileService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um perfil de usuário',
  })
  create(@Body() createProfileDto: CreateProfileDto,@LoggedUser() user:User) {// Falta verificar usuário logado (Logged user)
    if(createProfileDto){
      return this.profileService.create(createProfileDto);
    }
    return console.log("it is necessary to fill in all the fields!");
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Alterar dados de um perfil',
  })
  update(@Param('id') id: string, @Body() dto: UpdateProfileDto){
    return this.profileService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um perfil',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.profileService.delete(id);
  }
}
