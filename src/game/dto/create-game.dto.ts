import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';
import { IsBoolean, IsNotEmpty, isNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Max, Min, min } from 'class-validator';


export class CreateGameDto {
@IsString()
@IsNotEmpty()
@ApiProperty({
  example: 'O Nome do jogo',
})
Title:string;
@IsString()
@ApiProperty({
  example: 'https://www.youtube.com/watch?v=kgx4WGK0oNU',
})
CoverImageUrl:string;
@IsString()
@ApiProperty({
  example: 'Digite aqui um resumo sobre o jogo',
})
Description:string;
@IsNumber()
@Min(1995)
@ApiProperty({
  example: '2005',
})
Year:number;
@ApiProperty({
  example: '4',
})
@IsNumber()
@Min(0)
@Max(5)
@IsNotEmpty()
ImdbScore:number;
@IsString()
@ApiProperty({
  example: 'https://www.youtube.com/watch?v=kgx4WGK0oNU',
})
TrailerYouTubeUrl:string;
@IsString()
@ApiProperty({
  example: 'https://www.youtube.com/watch?v=kgx4WGK0oNU',
})
GameplayYouTubeUrl:string;
@IsString()
@IsUUID("all",{each:true})
@IsOptional()
  @ApiProperty({
    example: 'abbb7373-c58c-4c14-bd06-c7ae0a703ea7',
  })
gender:string[];
}
