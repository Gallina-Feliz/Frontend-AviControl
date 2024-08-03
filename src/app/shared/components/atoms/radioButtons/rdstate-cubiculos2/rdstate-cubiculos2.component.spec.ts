import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDstateCubiculos2Component } from './rdstate-cubiculos2.component';

describe('RDstateCubiculos2Component', () => {
  let component: RDstateCubiculos2Component;
  let fixture: ComponentFixture<RDstateCubiculos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RDstateCubiculos2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDstateCubiculos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
