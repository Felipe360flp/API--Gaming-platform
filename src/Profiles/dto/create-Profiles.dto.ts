import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import {IsString } from 'class-validator';

export class CreateProfileDto {
@IsString()
@ApiProperty({
  example: 'Action Games',
})
Title:string;
@ApiProperty({
  example: 'https://s2.glbimg.com/dLHiEFov94ONVIVLP2V85FWh7hE=/0x0:695x390/984x0/.jpg',
})
@IsString()
ImageURL:string;

@ApiProperty({
  example: 'hjihosapkdapskasdkajaifasdpfdjadfja',
})
@IsString()
userID:string;
}
