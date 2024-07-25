import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3accComponent } from './h3acc.component';

describe('H3accComponent', () => {
  let component: H3accComponent;
  let fixture: ComponentFixture<H3accComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3accComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3accComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
