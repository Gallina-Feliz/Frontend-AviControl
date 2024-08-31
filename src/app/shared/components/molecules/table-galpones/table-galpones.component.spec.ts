import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGalponesComponent } from './table-galpones.component';

describe('TableGalponesComponent', () => {
  let component: TableGalponesComponent;
  let fixture: ComponentFixture<TableGalponesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableGalponesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableGalponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
