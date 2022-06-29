import { Profile } from "src/Profiles/entities/Profiles.entity";

export class Users{
  id?:string;
  Name:string;
  Email:string;
  Password:string;
  CPF:string;
  isAdmin?:boolean;
  profile?:Profile[];
}
