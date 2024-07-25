import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H1adminComponent } from './h1admin.component';

describe('H1adminComponent', () => {
  let component: H1adminComponent;
  let fixture: ComponentFixture<H1adminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H1adminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H1adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
