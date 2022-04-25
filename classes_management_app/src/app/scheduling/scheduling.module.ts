import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingRoutingModule } from './scheduling-routing.module';
import { ListSchedulingComponent } from './list-scheduling/list-scheduling.component';

@NgModule({
  declarations: [ListSchedulingComponent],
  imports: [CommonModule, SchedulingRoutingModule],
})
export class SchedulingModule {}
