import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivFormStateGallinaComponent } from './div-form-state-gallina.component';

describe('DivFormStateGallinaComponent', () => {
  let component: DivFormStateGallinaComponent;
  let fixture: ComponentFixture<DivFormStateGallinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivFormStateGallinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivFormStateGallinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
