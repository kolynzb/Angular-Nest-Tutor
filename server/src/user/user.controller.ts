import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcryptjs';

@Controller('api')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('register')
  async register(@Body() body: any) {
    if (body.password !== body.password_confirmation) {
      throw new BadRequestException(
        'Password and password confirmation do not match',
      );
    }

    return this.userService.save({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: await bcrypt.hash(body.password, 12),
    });
  }
}
