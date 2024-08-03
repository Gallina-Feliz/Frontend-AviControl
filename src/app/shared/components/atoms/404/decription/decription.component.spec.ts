import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecriptionComponent } from './decription.component';

describe('DecriptionComponent', () => {
  let component: DecriptionComponent;
  let fixture: ComponentFixture<DecriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
