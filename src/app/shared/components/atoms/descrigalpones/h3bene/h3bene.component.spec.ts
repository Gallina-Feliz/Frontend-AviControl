import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3beneComponent } from './h3bene.component';

describe('H3beneComponent', () => {
  let component: H3beneComponent;
  let fixture: ComponentFixture<H3beneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3beneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3beneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
