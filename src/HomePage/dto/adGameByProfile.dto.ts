import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateProfileDto } from '../../Profiles/dto/create-Profiles.dto';

export class addGameByProfile extends PartialType(CreateProfileDto) {
  @IsString()
  @ApiProperty({
    example: 'abbb7373-c58c-4c14-bd06-c7ae0a703ea7',
  })
  gameID: string;
}
