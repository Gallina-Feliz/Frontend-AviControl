import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3produComponent } from './h3produ.component';

describe('H3produComponent', () => {
  let component: H3produComponent;
  let fixture: ComponentFixture<H3produComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3produComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3produComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
