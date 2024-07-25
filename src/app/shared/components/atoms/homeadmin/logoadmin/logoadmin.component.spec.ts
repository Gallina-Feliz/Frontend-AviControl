import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoadminComponent } from './logoadmin.component';

describe('LogoadminComponent', () => {
  let component: LogoadminComponent;
  let fixture: ComponentFixture<LogoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
