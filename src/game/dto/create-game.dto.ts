import { ApiProperty } from '@nestjs/swagger';
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
@IsNumber()
ImdbScore:number;
@IsString()
TrailerYouTubeUrl:string;
@IsString()
GameplayYouTubeUrl:string;
}
