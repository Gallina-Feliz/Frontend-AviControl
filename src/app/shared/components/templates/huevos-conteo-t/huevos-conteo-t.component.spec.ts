import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuevosConteoTComponent } from './huevos-conteo-t.component';

describe('HuevosConteoTComponent', () => {
  let component: HuevosConteoTComponent;
  let fixture: ComponentFixture<HuevosConteoTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HuevosConteoTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HuevosConteoTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
