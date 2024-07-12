import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionGalponesComponent } from './descripcion-galpones.component';

describe('DescripcionGalponesComponent', () => {
  let component: DescripcionGalponesComponent;
  let fixture: ComponentFixture<DescripcionGalponesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescripcionGalponesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripcionGalponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
