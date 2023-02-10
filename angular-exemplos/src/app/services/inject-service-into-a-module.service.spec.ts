import { TestBed } from '@angular/core/testing';

import { InjectServiceIntoAModuleService } from './inject-service-into-a-module.service';

describe('InjectServiceIntoAModuleService', () => {
  let service: InjectServiceIntoAModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectServiceIntoAModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
