import { TestBed } from '@angular/core/testing';

import { InjectServiceIntoAComponentService } from './inject-service-into-a-component.service';

describe('InjectServiceIntoAComponentService', () => {
  let service: InjectServiceIntoAComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectServiceIntoAComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
