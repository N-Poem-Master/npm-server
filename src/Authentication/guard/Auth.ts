import { UseGuards, applyDecorators } from '@nestjs/common';
import { JwtGuard } from './JwtGuard';

export function Auth() {
  return applyDecorators(UseGuards(JwtGuard));
}
