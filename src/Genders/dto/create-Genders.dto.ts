import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import {IsNotEmpty, IsString, isUppercase } from 'class-validator';

export class CreateGenderDto {
@IsString()
@IsNotEmpty()
@ApiProperty({
  description:'Descrição do gênero',
  example:'adventure',
})
Name:string;
}
