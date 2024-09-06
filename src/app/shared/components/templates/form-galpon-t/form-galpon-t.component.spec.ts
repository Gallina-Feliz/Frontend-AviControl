import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGalponTComponent } from './form-galpon-t.component';

describe('FormGalponTComponent', () => {
  let component: FormGalponTComponent;
  let fixture: ComponentFixture<FormGalponTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormGalponTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGalponTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
