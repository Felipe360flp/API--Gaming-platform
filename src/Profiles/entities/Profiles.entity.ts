import { Game } from "src/game/entities/game.entity";
import { Users } from "src/Users/entities/Users.entity";

export class Profile{
id?:string;
Title:string;
ImageURL:string;
user?:Users;
game?:Game[]
}
