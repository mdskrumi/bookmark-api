import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/me')
  getMe() {
    return { user_info: 'user' };
  }
}
