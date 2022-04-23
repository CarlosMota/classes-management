import { IsString, MaxLength, MinLength } from 'class-validator';
import { UserType } from '../user-type.enum';

export class AuthCredentialDto {
  @IsString()
  @MinLength(4)
  @MaxLength(16)
  username: string;

  @IsString()
  @MinLength(8)
  password: string;
}
