import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTComponent } from './home-page-t.component';

describe('HomePageTComponent', () => {
  let component: HomePageTComponent;
  let fixture: ComponentFixture<HomePageTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
