import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {

  games: Game[] = [

    {
      id:"randow id",
      Title:"Skyrim",
      CoverImageUrl:"no image",
      Description:"Open world rpg game",
      Year:2011,
      ImdbScore:4,
      TrailerYouTubeUrl:"no trailer",
      GameplayYouTubeUrl:"no gameplay",

    },
    {
      id:"randow id",
      Title:"Oblivion",
      CoverImageUrl:"no image",
      Description:"Open world rpg game",
      Year:2006,
      ImdbScore:4,
      TrailerYouTubeUrl:"no trailer",
      GameplayYouTubeUrl:"no gameplay",

    }

  ];

  findAll() {
    return this.games;
  }

  create(createGameDto: CreateGameDto) {
    const game: Game = { id: 'random_id', ...createGameDto };

    this.games.push(game);

    return game;
  }

}
