import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludGallinaPageTComponent } from './salud-gallina-page-t.component';

describe('SaludGallinaPageTComponent', () => {
  let component: SaludGallinaPageTComponent;
  let fixture: ComponentFixture<SaludGallinaPageTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaludGallinaPageTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaludGallinaPageTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
