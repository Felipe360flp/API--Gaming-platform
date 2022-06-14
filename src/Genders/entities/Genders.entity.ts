import { Game } from "@prisma/client";

export class Genders {
  id?:string;
  Name:string;
  gamesID?:string[];
}
