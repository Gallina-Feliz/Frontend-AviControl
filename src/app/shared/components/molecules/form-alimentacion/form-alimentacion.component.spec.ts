import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlimentacionComponent } from './form-alimentacion.component';

describe('FormAlimentacionComponent', () => {
  let component: FormAlimentacionComponent;
  let fixture: ComponentFixture<FormAlimentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAlimentacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAlimentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
