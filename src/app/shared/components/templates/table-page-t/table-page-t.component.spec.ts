import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePageTComponent } from './table-page-t.component';

describe('TablePageTComponent', () => {
  let component: TablePageTComponent;
  let fixture: ComponentFixture<TablePageTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePageTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePageTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
