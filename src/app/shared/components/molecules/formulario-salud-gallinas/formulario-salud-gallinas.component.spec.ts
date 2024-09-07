import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSaludGallinasComponent } from './formulario-salud-gallinas.component';

describe('FormularioSaludGallinasComponent', () => {
  let component: FormularioSaludGallinasComponent;
  let fixture: ComponentFixture<FormularioSaludGallinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioSaludGallinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioSaludGallinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
