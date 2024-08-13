import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavbarContentComponent } from './side-navbar-content.component';

describe('SideNavbarContentComponent', () => {
  let component: SideNavbarContentComponent;
  let fixture: ComponentFixture<SideNavbarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavbarContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
