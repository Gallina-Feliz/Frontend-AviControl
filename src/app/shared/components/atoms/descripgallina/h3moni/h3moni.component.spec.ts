import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3moniComponent } from './h3moni.component';

describe('H3moniComponent', () => {
  let component: H3moniComponent;
  let fixture: ComponentFixture<H3moniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3moniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3moniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
