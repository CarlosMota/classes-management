import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/auth/user/user.service';
import { Schedules } from '../scheduling';
import { SchedulingService } from '../scheduling.service';

@Component({
  selector: 'app-list-scheduling',
  templateUrl: './list-scheduling.component.html',
  styleUrls: ['./list-scheduling.component.css'],
})
export class ListSchedulingComponent implements OnInit {
  schedules$!: Observable<Schedules>;

  constructor(private scheduling: SchedulingService) {}

  ngOnInit(): void {
    this.schedules$ = this.scheduling.listScheduling();
  }
}
