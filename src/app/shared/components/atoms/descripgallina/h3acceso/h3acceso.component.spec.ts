import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3accesoComponent } from './h3acceso.component';

describe('H3accesoComponent', () => {
  let component: H3accesoComponent;
  let fixture: ComponentFixture<H3accesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3accesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3accesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
