import { TestBed } from '@angular/core/testing';

import { WebapiserviceService } from './webapiservice.service';

describe('WebapiserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebapiserviceService = TestBed.get(WebapiserviceService);
    expect(service).toBeTruthy();
  });
});
