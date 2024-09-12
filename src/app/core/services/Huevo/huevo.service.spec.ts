import { TestBed } from '@angular/core/testing';

import { HuevoService } from './huevo.service';

describe('HuevoService', () => {
  let service: HuevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
