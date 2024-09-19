import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspDataChartComponent } from './esp-data-chart.component';

describe('EspDataChartComponent', () => {
  let component: EspDataChartComponent;
  let fixture: ComponentFixture<EspDataChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EspDataChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
