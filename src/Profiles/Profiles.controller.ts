import { Body,Controller, Get,Post,Res,Param,Patch,Delete,HttpCode,HttpStatus} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { exit } from 'process';
import { CreateProfileDto } from './dto/create-Profiles.dto';
import { UpdateProfileDto } from './dto/update-profiles.dto';
import { Profile } from './entities/Profiles.entity';
import { ProfileService } from './Profiles.service';

@ApiTags('Profiles')
@Controller('Profiles')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.profileService.findOne(id);
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    if(createProfileDto){
      return this.profileService.create(createProfileDto);
    }
    return console.log("it is necessary to fill in all the fields!");
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProfileDto){
    return this.profileService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.profileService.delete(id);
  }
}
