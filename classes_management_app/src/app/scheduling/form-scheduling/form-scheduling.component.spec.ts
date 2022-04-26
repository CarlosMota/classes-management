import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchedulingComponent } from './form-scheduling.component';

describe('FormSchedulingComponent', () => {
  let component: FormSchedulingComponent;
  let fixture: ComponentFixture<FormSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSchedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
