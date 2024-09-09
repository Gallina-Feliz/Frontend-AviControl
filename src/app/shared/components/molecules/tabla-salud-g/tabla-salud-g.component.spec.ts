import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSaludGComponent } from './tabla-salud-g.component';

describe('TablaSaludGComponent', () => {
  let component: TablaSaludGComponent;
  let fixture: ComponentFixture<TablaSaludGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaSaludGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaSaludGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
