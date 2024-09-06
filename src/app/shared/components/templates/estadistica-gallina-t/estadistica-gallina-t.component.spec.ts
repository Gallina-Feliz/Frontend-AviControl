import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaGallinaTComponent } from './estadistica-gallina-t.component';

describe('EstadisticaGallinaTComponent', () => {
  let component: EstadisticaGallinaTComponent;
  let fixture: ComponentFixture<EstadisticaGallinaTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadisticaGallinaTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadisticaGallinaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
