import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLabelComponent } from './message-label.component';

describe('MessageLabelComponent', () => {
  let component: MessageLabelComponent;
  let fixture: ComponentFixture<MessageLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
