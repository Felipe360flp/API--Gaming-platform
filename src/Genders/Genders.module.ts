import { Module } from '@nestjs/common';
import { GenderController } from './Genders.controller';
import { GenderService } from './Genders.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GenderController],
  providers: [GenderService],
})
export class GenderModule {}
