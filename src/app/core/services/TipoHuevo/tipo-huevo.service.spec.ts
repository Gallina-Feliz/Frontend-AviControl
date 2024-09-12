import { TestBed } from '@angular/core/testing';

import { TipoHuevoService } from './tipo-huevo.service';

describe('TipoHuevoService', () => {
  let service: TipoHuevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoHuevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
