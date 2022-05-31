import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString,IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name:string;
  @IsString()
  Email:string;
  @IsString()
  Password:string;
  @IsNumber()
  CPF:number;
  @IsBoolean()
  isAdmin:boolean;
}
