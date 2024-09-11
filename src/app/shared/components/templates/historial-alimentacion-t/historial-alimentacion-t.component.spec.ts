import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialAlimentacionTComponent } from './historial-alimentacion-t.component';

describe('HistorialAlimentacionTComponent', () => {
  let component: HistorialAlimentacionTComponent;
  let fixture: ComponentFixture<HistorialAlimentacionTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialAlimentacionTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorialAlimentacionTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
