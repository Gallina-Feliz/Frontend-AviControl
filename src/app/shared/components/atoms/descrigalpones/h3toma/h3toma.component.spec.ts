import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3tomaComponent } from './h3toma.component';

describe('H3tomaComponent', () => {
  let component: H3tomaComponent;
  let fixture: ComponentFixture<H3tomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3tomaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3tomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
