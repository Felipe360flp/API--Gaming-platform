import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import {IsString } from 'class-validator';

export class CreateProfileDto {
@IsString()
Title:string;
@IsString()
ImageURL:string;
@IsString()
userID:string;
}
