import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-Profiles.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
