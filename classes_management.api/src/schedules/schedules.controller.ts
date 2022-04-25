import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
import { UserSchedulesDto } from './dto/user-schedules.dto';
import { SchedulesService } from './schedules.service';
import { Scheduling } from './scheduling.entity';

@Controller('schedules')
@UseGuards(AuthGuard())
export class SchedulesController {
  constructor(private readonly schudulesService: SchedulesService) {}

  @Get()
  getSchedules(@GetUser() user: User): Promise<UserSchedulesDto[]> {
    return this.schudulesService.getSchedules(user);
  }

  @Post()
  createScheduling(
    @Body() createScheduling: CreateSchedulingDto,
    @GetUser() user: User,
  ): Promise<Scheduling> {
    console.log(createScheduling);
    return this.schudulesService.createScheduling(createScheduling, user);
  }
}
