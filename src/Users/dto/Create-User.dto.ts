import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString,IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    example: 'Miguel Correa filho',
  })
  Name:string;
  @IsString()
  @ApiProperty({
    example: 'mig.c@gmail.com',
  })
  Email:string;
  @IsString()
  @ApiProperty({
    example: 'Mig@1234$16',
  })
  Password:string;
  @IsString()
  @ApiProperty({
    example: '56485668541',
  })
  CPF:string;
  @IsBoolean()
  @ApiProperty({
    example: 'true',
  })
  isAdmin:boolean;
  profiles?:string[];
}
