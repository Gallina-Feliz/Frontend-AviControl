import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3regristroComponent } from './h3regristro.component';

describe('H3regristroComponent', () => {
  let component: H3regristroComponent;
  let fixture: ComponentFixture<H3regristroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3regristroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3regristroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
