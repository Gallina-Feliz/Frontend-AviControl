import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConteoComponent } from './form-conteo.component';

describe('FormConteoComponent', () => {
  let component: FormConteoComponent;
  let fixture: ComponentFixture<FormConteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormConteoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormConteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
