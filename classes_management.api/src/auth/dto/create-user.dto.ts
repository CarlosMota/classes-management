import {
  IsEmail,
  IsEnum,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserType } from '../user-type.enum';

export class AuthCreateDto {
  @IsString()
  @MinLength(4)
  @MaxLength(16)
  username: string;

  @MaxLength(16)
  firstName: string;

  @MaxLength(16)
  lastName: string;

  @IsEnum(UserType)
  userType: UserType;

  @MaxLength(255)
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
