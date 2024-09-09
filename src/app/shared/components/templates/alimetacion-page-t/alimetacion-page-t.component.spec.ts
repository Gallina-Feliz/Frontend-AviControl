import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimetacionPageTComponent } from './alimetacion-page-t.component';

describe('AlimetacionPageTComponent', () => {
  let component: AlimetacionPageTComponent;
  let fixture: ComponentFixture<AlimetacionPageTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlimetacionPageTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlimetacionPageTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
