import { Component, Input, OnInit } from '@angular/core';
import { Schedules } from '../scheduling';

@Component({
  selector: 'app-table-scheduling',
  templateUrl: './table-scheduling.component.html',
  styleUrls: ['./table-scheduling.component.css'],
})
export class TableSchedulingComponent implements OnInit {
  @Input()
  schedules: Schedules = [];

  constructor() {}

  ngOnInit(): void {}
}
