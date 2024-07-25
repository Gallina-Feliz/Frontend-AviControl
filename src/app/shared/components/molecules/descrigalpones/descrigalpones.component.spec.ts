import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrigalponesComponent } from './descrigalpones.component';

describe('DescrigalponesComponent', () => {
  let component: DescrigalponesComponent;
  let fixture: ComponentFixture<DescrigalponesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescrigalponesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescrigalponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
