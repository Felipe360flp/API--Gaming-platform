import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { UserModule } from './Users/Users.module';
import { PrismaModule } from './prisma/prisma.module';
import { GenderModule } from './Genders/Genders.module';
import { ProfileModule } from './Profiles/Profile.module';
import { HomePageModule } from "src/HomePage/Home.module"

@Module({
  imports: [GameModule,UserModule,GenderModule,ProfileModule,HomePageModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
