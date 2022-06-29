import { UnauthorizedException } from '@nestjs/common';
import { Users } from 'src/Users/entities/Users.entity';

export function isAdmin(user: Users) {
  if (!user.isAdmin) {
    throw new UnauthorizedException('Você não tem permissão de admin');
  }
}
