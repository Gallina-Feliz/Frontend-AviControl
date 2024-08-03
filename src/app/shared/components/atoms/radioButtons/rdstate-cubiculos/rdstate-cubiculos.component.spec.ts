import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDstateCubiculosComponent } from './rdstate-cubiculos.component';

describe('RDstateCubiculosComponent', () => {
  let component: RDstateCubiculosComponent;
  let fixture: ComponentFixture<RDstateCubiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RDstateCubiculosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDstateCubiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
