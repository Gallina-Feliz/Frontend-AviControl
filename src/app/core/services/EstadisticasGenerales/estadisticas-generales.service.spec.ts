import { TestBed } from '@angular/core/testing';

import { EstadisticasGeneralesService } from './estadisticas-generales.service';

describe('EstadisticasGeneralesService', () => {
  let service: EstadisticasGeneralesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadisticasGeneralesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
