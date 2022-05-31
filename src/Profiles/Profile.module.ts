import { Module } from '@nestjs/common';
import { ProfileController } from './Profiles.controller';
import { ProfileService } from './Profiles.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
