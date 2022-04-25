import { IsNotEmpty, IsString } from 'class-validator';

export class UserSchedulesDto {
  firstName: string;
  lastName: string;
  classDate: Date;
}
