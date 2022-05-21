import { Body,Controller, Get,HttpService,Post, Res} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { exit } from 'process';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { GameService } from './game.service';
const gamelist = require('./game.service');

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    /*Validar se no campo "imdbScore" está entre 0 e 5*/
    if(createGameDto.ImdbScore >=0 && createGameDto.ImdbScore <=5){
      return this.gameService.create(createGameDto);
    }
    return console.log("imdbScore needs a value between 1 and 5!")
  }
}
