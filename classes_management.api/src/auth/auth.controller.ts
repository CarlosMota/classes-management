import { Body, Controller, Post, Response, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import { AuthCreateDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCreateDto: AuthCreateDto): Promise<void> {
    return this.authService.signUp(authCreateDto);
  }

  @Post('/signin')
  @HttpCode(200)
  async signIn(
    @Body() authCredentialDto: AuthCredentialDto,
    @Response() res,
  ): Promise<void> {
    const { accessToken } = await this.authService.signIn(authCredentialDto);
    res.set({ 'x-access-token': accessToken }).json({});
  }

  @Post('/checkUserName')
  checkUserName(@Body() userName: string): Promise<string> {
    return this.authService.getUserName(userName);
  }
}
