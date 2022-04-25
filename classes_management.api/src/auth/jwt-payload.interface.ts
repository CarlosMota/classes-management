import { UserType } from './user-type.enum';

export interface JwtPayload {
  username: string;
  firstName: string;
  lastName: string;
  userType: UserType;
}
