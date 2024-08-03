import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStateGallinasComponent } from './form-state-gallinas.component';

describe('FormStateGallinasComponent', () => {
  let component: FormStateGallinasComponent;
  let fixture: ComponentFixture<FormStateGallinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormStateGallinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormStateGallinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
