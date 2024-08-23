import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoGallinaComponent } from './estado-gallina.component';

describe('EstadoGallinaComponent', () => {
  let component: EstadoGallinaComponent;
  let fixture: ComponentFixture<EstadoGallinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadoGallinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoGallinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
