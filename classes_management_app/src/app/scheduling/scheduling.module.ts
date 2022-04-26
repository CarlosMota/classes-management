import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingRoutingModule } from './scheduling-routing.module';
import { ListSchedulingComponent } from './list-scheduling/list-scheduling.component';
import { TableSchedulingComponent } from './table-scheduling/table-scheduling.component';
import { SchedulingFormComponent } from './scheduling-form/scheduling-form.component';

@NgModule({
  declarations: [ListSchedulingComponent, TableSchedulingComponent, SchedulingFormComponent],
  imports: [CommonModule, SchedulingRoutingModule],
})
export class SchedulingModule {}
