import { TestBed } from '@angular/core/testing';

import { GallinaService } from './gallina.service';

describe('GallinaService', () => {
  let service: GallinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GallinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
