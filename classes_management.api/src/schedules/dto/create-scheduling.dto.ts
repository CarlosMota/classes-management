import { IsDate, IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class CreateSchedulingDto {
  @IsNotEmpty()
  @IsString()
  idProfessor: string;
  @IsNotEmpty()
  @IsDate()
  @ValidateIf((schedulingDto) => schedulingDto.classDate < Date.now, {
    message: 'Date invalid',
  })
  classDate: Date;
}
