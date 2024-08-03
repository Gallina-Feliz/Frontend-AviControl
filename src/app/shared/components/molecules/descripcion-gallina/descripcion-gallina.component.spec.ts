import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionGallinaComponent } from './descripcion-gallina.component';

describe('DescripcionGallinaComponent', () => {
  let component: DescripcionGallinaComponent;
  let fixture: ComponentFixture<DescripcionGallinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescripcionGallinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripcionGallinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
