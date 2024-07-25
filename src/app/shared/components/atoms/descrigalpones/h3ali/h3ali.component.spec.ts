import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3aliComponent } from './h3ali.component';

describe('H3aliComponent', () => {
  let component: H3aliComponent;
  let fixture: ComponentFixture<H3aliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3aliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3aliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
