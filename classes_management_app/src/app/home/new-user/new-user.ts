import { UserType } from './user-type.enum';

export interface NewUser {
  username: string;

  firstName: string;

  lastName: string;

  userType: UserType;

  email: string;

  password: string;
}
