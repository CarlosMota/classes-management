import { TestBed } from '@angular/core/testing';

import { FormSchedulingService } from './form-scheduling.service';

describe('FormSchedulingService', () => {
  let service: FormSchedulingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSchedulingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
