import { UserType } from 'src/app/home/new-user/user-type.enum';

export interface User {
  id?: number;
  username?: string;
  emai?: string;
  firstName?: string;
  lastName?: string;
  userType?: UserType;
}
