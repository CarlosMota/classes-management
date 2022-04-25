import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageLabelComponent } from './message-label.component';

@NgModule({
  declarations: [MessageLabelComponent],
  imports: [CommonModule],
  exports: [MessageLabelComponent],
})
export class MessageLabelModule {}
