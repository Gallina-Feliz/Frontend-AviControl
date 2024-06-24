import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialYEstadisticasComponent } from './historial-y-estadisticas.component';

describe('HistorialYEstadisticasComponent', () => {
  let component: HistorialYEstadisticasComponent;
  let fixture: ComponentFixture<HistorialYEstadisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialYEstadisticasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialYEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
