import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionGallinasComponent } from './descripcion-gallinas.component';

describe('DescripcionGallinasComponent', () => {
  let component: DescripcionGallinasComponent;
  let fixture: ComponentFixture<DescripcionGallinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescripcionGallinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripcionGallinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
