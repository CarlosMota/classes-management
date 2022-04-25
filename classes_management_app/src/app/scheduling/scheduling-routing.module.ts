import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSchedulingComponent } from './list-scheduling/list-scheduling.component';

const routes: Routes = [
  {
    path: '',
    component: ListSchedulingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulingRoutingModule {}
