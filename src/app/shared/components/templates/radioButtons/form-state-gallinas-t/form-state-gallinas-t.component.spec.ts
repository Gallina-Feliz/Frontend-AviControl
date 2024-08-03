import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStateGallinasTComponent } from './form-state-gallinas-t.component';

describe('FormStateGallinasTComponent', () => {
  let component: FormStateGallinasTComponent;
  let fixture: ComponentFixture<FormStateGallinasTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormStateGallinasTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormStateGallinasTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
