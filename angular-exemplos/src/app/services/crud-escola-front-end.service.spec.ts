/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudEscolaFrontEndService } from './crud-escola-front-end.service';

describe('Service: CrudEscolaFrontEnd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudEscolaFrontEndService]
    });
  });

  it('should ...', inject([CrudEscolaFrontEndService], (service: CrudEscolaFrontEndService) => {
    expect(service).toBeTruthy();
  }));
});
