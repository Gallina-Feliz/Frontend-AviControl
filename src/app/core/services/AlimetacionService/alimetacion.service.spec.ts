import { TestBed } from '@angular/core/testing';
import { AlimentacionService } from './alimetacion.service';

describe('AlimetacionService', () => {
  let service: AlimentacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
