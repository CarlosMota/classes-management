import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { AuthCreateDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(authCreateDto: AuthCreateDto): Promise<void> {
    const { username, firstName, lastName, email, userType, password } =
      authCreateDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.repository.create({
      username,
      firstName,
      lastName,
      email,
      userType,
      password: hashedPassword,
    });
    try {
      await this.repository.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username alredy exists');
      } else {
        console.log(error);
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialDto;
    const user = await this.repository.findOne({ username });
    const { firstName, lastName, userType } = user;

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { username, firstName, lastName, userType };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login');
    }
  }

  async getUserName(username: string): Promise<string> {
    const found = await this.repository.findOne({
      where: { username },
    });

    if (!found) {
      return '';
    }

    return found.username;
  }
}
