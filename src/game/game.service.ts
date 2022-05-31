import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';


@Injectable()
export class GameService {

  games: Game[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.game.findMany();
  }

  async findOne(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({ where: { id }});

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }

    return record;
  }

  async create(createGameDto: CreateGameDto) {
    const game: Game = {...createGameDto};
    return this.prisma.game.create({data:game,}).catch(this.handleError);
}

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findOne(id);

    const data: Partial<Game> = { ...dto };

    return this.prisma.game.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.prisma.game.delete({ where: { id } });
  }

  handleError(error: Error) {
    console.log(error.message);
    throw new UnprocessableEntityException(error.message);

    return undefined;
  }

}
