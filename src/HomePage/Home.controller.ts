import { Get,Controller,Param,Body,Post,UseGuards} from '@nestjs/common';
import { exit } from 'process';
import { Profile } from 'src/Profiles/entities/Profiles.entity';
import { UpdateProfileDto } from 'src/Profiles/dto/update-profiles.dto';
import { HomePageService } from './Home.service';
import { addGameByProfile } from 'src/HomePage/dto/adGameByProfile.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('HomePage')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('HomePage')
export class HomePageController {
  constructor(private homePageService: HomePageService) {}

  @Get('profile/:id')
  @ApiOperation({
    summary: 'Localizar a homepage de um determinado perfil',
  })
  findById(@Param('id') id: string){
    return this.homePageService.findhomePageByProfile(id);
  }

  @Post('favoriteGameByProfile/:id')
  @ApiOperation({
    summary: 'Adicionar um jogo a um perfil específico',
  })
  create(@Param('id') id: string, @Body() dto: addGameByProfile){
    return this.homePageService.addGameByProfile(dto);
  }

}
