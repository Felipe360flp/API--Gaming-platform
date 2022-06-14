import { Module } from '@nestjs/common';
import { UsersController } from './Users.controller';
import { UserService } from './Users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule,PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [UsersController],
  providers: [UserService],
})
export class UserModule {}
