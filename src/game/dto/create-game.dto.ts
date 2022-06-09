import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';


export class CreateGameDto {
@IsString()
Title:string;
@IsString()
CoverImageUrl:string;
@IsString()
Description:string;
@IsNumber()
Year:number;
@ApiProperty({
  description: 'A nota deve ser entre 0 e 5',
  example: '4',
})
@IsNumber()
ImdbScore:number;
@IsString()
TrailerYouTubeUrl:string;
@IsString()
GameplayYouTubeUrl:string;
@IsString()
genderID:string;
}
