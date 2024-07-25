import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2desComponent } from './h2des.component';

describe('H2desComponent', () => {
  let component: H2desComponent;
  let fixture: ComponentFixture<H2desComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H2desComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H2desComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
