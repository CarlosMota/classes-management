import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderPageComponent],
})
export class HeaderPageModule {}
