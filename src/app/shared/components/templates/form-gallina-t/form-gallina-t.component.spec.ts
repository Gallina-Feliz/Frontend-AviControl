import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGallinaTComponent } from './form-gallina-t.component';

describe('FormGallinaTComponent', () => {
  let component: FormGallinaTComponent;
  let fixture: ComponentFixture<FormGallinaTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormGallinaTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGallinaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
