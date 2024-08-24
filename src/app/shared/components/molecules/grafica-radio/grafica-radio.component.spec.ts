import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaRadioComponent } from './grafica-radio.component';

describe('GraficaRadioComponent', () => {
  let component: GraficaRadioComponent;
  let fixture: ComponentFixture<GraficaRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficaRadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficaRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
