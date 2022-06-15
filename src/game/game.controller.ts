import { Body,Controller, Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus, UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags,ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { userInfo } from 'os';
import { exit } from 'process';
import { UserService } from 'src/Users/Users.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { GameService } from './game.service';
import { PrismaService } from 'src/prisma/prisma.service';

@ApiTags('Games')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('Games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos',
  })
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Localizar um jogo',
  })
  findOne(@Param('id') id: string){
     return this.gameService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Adicionar um jogo',
  })
  create(@Body() createGameDto: CreateGameDto) {
    if(
      createGameDto.ImdbScore >=0 &&
      createGameDto.ImdbScore <=5 &&
      !createGameDto.Title &&
      createGameDto.Title ==""
    ){
      return this.gameService.create(createGameDto);
    }
    return console.log("Error: Needs Title / imdbScore needs a value between 1 and 5! / isADM?")
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Alterar dados de um jogo',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGameDto){

    return this.gameService.update(id,dto);
  }


  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um jogo"',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.gameService.delete(id);
  }
}


