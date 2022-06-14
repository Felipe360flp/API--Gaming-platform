import { ApiProperty } from '@nestjs/swagger';
import {IsString, isUppercase } from 'class-validator';

export class CreateGenderDto {
@IsString()
@ApiProperty({
  example: 'João da silva',
})
Name:string;
}
