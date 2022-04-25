import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-label',
  templateUrl: './message-label.component.html',
  styleUrls: ['./message-label.component.css'],
})
export class MessageLabelComponent implements OnInit {
  @Input()
  mensagem = '';
  constructor() {}

  ngOnInit(): void {}
}
