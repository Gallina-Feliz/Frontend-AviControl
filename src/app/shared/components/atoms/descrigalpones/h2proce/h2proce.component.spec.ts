import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H2proceComponent } from './h2proce.component';

describe('H2proceComponent', () => {
  let component: H2proceComponent;
  let fixture: ComponentFixture<H2proceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H2proceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H2proceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
