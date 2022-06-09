import { Profile } from "src/Profiles/entities/Profiles.entity";

export class Users{
  id?:string;
  Name:string;
  Email:string;
  Password:string;
  CPF:number;
  isAdmin:boolean;
  profile?:Profile[];
}
