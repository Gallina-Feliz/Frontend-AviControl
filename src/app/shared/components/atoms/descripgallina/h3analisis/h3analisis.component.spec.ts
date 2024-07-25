import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3analisisComponent } from './h3analisis.component';

describe('H3analisisComponent', () => {
  let component: H3analisisComponent;
  let fixture: ComponentFixture<H3analisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3analisisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3analisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
