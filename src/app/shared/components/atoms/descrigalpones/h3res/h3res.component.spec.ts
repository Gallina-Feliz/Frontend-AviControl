import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3resComponent } from './h3res.component';

describe('H3resComponent', () => {
  let component: H3resComponent;
  let fixture: ComponentFixture<H3resComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3resComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3resComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
