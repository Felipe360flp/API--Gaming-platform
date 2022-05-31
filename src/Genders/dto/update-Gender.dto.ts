import { PartialType } from '@nestjs/mapped-types';
import { CreateGenderDto } from './create-Genders.dto';

export class UpdateGenderDto extends PartialType(CreateGenderDto) {}
