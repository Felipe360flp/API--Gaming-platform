import { Get,Controller,Param} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { exit } from 'process';
import { Profile } from 'src/Profiles/entities/Profiles.entity';
import { ProfileService } from 'src/Profiles/Profiles.service';

@ApiTags('HomePage')
@Controller('HomePage')
export class HomePageController {
  constructor(private profileService: ProfileService) {}

  @Get(':id')
  favoriteGameByProfile(@Param('id') id: string){
    return this.profileService.findOne(id);
  }

}
