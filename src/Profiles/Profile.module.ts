import { Module } from '@nestjs/common';
import { ProfileController } from './Profiles.controller';
import { ProfileService } from './Profiles.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule,PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
