import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageTComponent } from './login-page-t.component';

describe('LoginPageTComponent', () => {
  let component: LoginPageTComponent;
  let fixture: ComponentFixture<LoginPageTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPageTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
