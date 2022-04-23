import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SchedulesModule } from './schedules/schedules.module';
import { AuthModule } from './auth/auth.module';

@Module({
  providers: [AppService],
  imports: [SchedulesModule, AuthModule],
})
export class AppModule {}
