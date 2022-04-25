import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPageComponent } from './footer-page.component';
import { HeaderPageComponent } from '../header-page/header-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterPageComponent],
})
export class FooterPageModule {}
