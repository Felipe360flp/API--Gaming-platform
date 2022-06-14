import { Module } from '@nestjs/common';
import { GenderController } from './Genders.controller';
import { GenderService } from './Genders.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule,PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [GenderController],
  providers: [GenderService],
})
export class GenderModule {}
