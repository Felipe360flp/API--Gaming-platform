import { Body,Controller, Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { exit } from 'process';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { GameService } from './game.service';

@ApiTags('Games')
@Controller('Games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.findOne(id);
  }

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    if(
      createGameDto.ImdbScore >=0 &&
      createGameDto.ImdbScore <=5 &&
      !createGameDto.Title &&
      createGameDto.Title ==""
      ){
      return this.gameService.create(createGameDto);
    }
    return console.log("Error: Needs Title/imdbScore needs a value between 1 and 5!")
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGameDto): Promise<Game> {
    return this.gameService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.gameService.delete(id);
  }
}


