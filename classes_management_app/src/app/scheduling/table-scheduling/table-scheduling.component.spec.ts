import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSchedulingComponent } from './table-scheduling.component';

describe('TableSchedulingComponent', () => {
  let component: TableSchedulingComponent;
  let fixture: ComponentFixture<TableSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSchedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
