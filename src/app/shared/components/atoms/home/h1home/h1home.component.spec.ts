import { ComponentFixture, TestBed } from '@angular/core/testing';

import { h1homeComponent} from './h1home.component';

describe('h1homeComponent', () => {
  let component: h1homeComponent;
  let fixture: ComponentFixture<h1homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [h1homeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(h1homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
