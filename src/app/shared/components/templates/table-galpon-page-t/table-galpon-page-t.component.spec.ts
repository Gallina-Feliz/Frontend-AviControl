import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGalponPageTComponent } from './table-galpon-page-t.component';

describe('TableGalponPageTComponent', () => {
  let component: TableGalponPageTComponent;
  let fixture: ComponentFixture<TableGalponPageTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableGalponPageTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableGalponPageTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
