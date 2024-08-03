import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H3instaComponent } from './h3insta.component';

describe('H3instaComponent', () => {
  let component: H3instaComponent;
  let fixture: ComponentFixture<H3instaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [H3instaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(H3instaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
