import { Component, Input, OnInit, TemplateRef } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: 'form-scheduling-modal.component.html',
})
export class FormSchedulingContent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-form-scheduling',
  templateUrl: './form-scheduling.component.html',
  styleUrls: ['./form-scheduling.component.css'],
})
export class FormSchedulingComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(FormSchedulingContent);
    modalRef.componentInstance.name = 'World';
  }
}
