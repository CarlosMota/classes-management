import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { Scheduling } from './scheduling.entity';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Scheduling)
    private readonly repository: Repository<Scheduling>,
  ) {}

  async createScheduling(
    createScheduling: CreateSchedulingDto,
    user: User,
  ): Promise<Scheduling> {
    const { idProfessor, classDate } = createScheduling;

    const scheduling = this.repository.create({
      idProfessor,
      classDate,
      idStudent: user.id,
    });

    await this.repository.save(scheduling);

    return scheduling;
  }
}
