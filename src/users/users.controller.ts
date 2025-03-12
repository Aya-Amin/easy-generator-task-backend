import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignUpDto, SignInDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.usersService.signUp(signUpDto);
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    return this.usersService.signIn(signInDto);
  }
}
