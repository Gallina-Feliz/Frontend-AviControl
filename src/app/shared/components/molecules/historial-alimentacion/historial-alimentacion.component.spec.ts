import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialAlimentacionComponent } from './historial-alimentacion.component';

describe('HistorialAlimentacionComponent', () => {
  let component: HistorialAlimentacionComponent;
  let fixture: ComponentFixture<HistorialAlimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialAlimentacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
