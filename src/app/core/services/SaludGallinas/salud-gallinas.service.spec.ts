import { TestBed } from '@angular/core/testing';

import { SaludGallinasService } from './salud-gallinas.service';

describe('SaludGallinasService', () => {
  let service: SaludGallinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaludGallinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
