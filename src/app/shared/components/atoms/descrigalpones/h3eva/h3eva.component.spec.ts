import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3evaComponent } from './h3eva.component';

describe('H3evaComponent', () => {
  let component: H3evaComponent;
  let fixture: ComponentFixture<H3evaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3evaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3evaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
