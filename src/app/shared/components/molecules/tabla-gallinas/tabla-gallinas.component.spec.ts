import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGallinasComponent } from './tabla-gallinas.component';

describe('TablaGallinasComponent', () => {
  let component: TablaGallinasComponent;
  let fixture: ComponentFixture<TablaGallinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaGallinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaGallinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
