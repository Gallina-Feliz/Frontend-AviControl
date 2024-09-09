import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSaludGallinasComponent } from './tabla-salud-gallinas.component';

describe('TablaSaludGallinasComponent', () => {
  let component: TablaSaludGallinasComponent;
  let fixture: ComponentFixture<TablaSaludGallinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaSaludGallinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaSaludGallinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
