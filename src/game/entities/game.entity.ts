import { Genders } from "src/Genders/entities/Genders.entity";
import { Profile } from "src/Profiles/entities/Profiles.entity";

export class Game {
  id?:string;
  Title:string;
  CoverImageUrl:string;
  Description:string;
  Year:number;
  ImdbScore?:number;
  TrailerYouTubeUrl:string;
  GameplayYouTubeUrl:string;
  gender?:Genders;
  profiles?:Profile[];
  createdAt?:Date;
  updatedAt?:Date;
}
