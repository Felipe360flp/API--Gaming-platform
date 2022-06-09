import { Module } from '@nestjs/common';
import { HomePageController } from './Home.controller';
import { HomePageService } from './Home.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HomePageController],
  providers: [HomePageService],
})
export class HomePageModule {}
