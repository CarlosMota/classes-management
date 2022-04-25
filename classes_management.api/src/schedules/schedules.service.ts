import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/auth/user-type.enum';
import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UserSchedulesDto } from './dto/user-schedules.dto';
import { Scheduling } from './scheduling.entity';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Scheduling)
    private readonly schedulingRepository: Repository<Scheduling>,
  ) {}

  async getSchedules(user: User): Promise<UserSchedulesDto[]> {
    const query = this.schedulingRepository.createQueryBuilder('scheduling');

    query
      .select('user.firstName', 'firstName')
      .addSelect('user.lastName', 'lastName')
      .addSelect('scheduling.classDate', 'classDate');

    const { id } = user;

    if (user.userType === UserType.PROFESSOR) {
      query
        .leftJoin('user', 'user', 'scheduling.id_student = user.id')
        .andWhere('scheduling.id_professor = :id', { id: id });
    } else {
      query
        .leftJoin('user', 'user', 'scheduling.id_professor = user.id')
        .andWhere('scheduling.id_student = :id', { id: id });
    }

    const schedules = query.getRawMany<UserSchedulesDto>();

    return schedules;
  }

  async createScheduling(
    createScheduling: CreateSchedulingDto,
    user: User,
  ): Promise<Scheduling> {
    const { idProfessor, classDate } = createScheduling;

    const scheduling = this.schedulingRepository.create({
      idProfessor,
      classDate,
      idStudent: user.id,
    });

    await this.schedulingRepository.save(scheduling);

    return scheduling;
  }
}
