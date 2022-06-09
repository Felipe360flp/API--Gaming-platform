import { Module } from '@nestjs/common';
import { UsersController } from './Users.controller';
import { UserService } from './Users.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
