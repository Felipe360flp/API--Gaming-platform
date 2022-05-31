import { ApiProperty } from '@nestjs/swagger';
import {IsString } from 'class-validator';

export class CreateProfileDto {
@IsString()
Title:string;
@IsString()
ImageURL:string;
}
