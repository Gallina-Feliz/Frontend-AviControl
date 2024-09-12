import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoHuevoTableComponent } from './tipo-huevo-table.component';

describe('TipoHuevoTableComponent', () => {
  let component: TipoHuevoTableComponent;
  let fixture: ComponentFixture<TipoHuevoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoHuevoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoHuevoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
