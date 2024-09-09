import { TestBed } from '@angular/core/testing';

import { AlimetacionService } from './alimetacion.service';

describe('AlimetacionService', () => {
  let service: AlimetacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimetacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
