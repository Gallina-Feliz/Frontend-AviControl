import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDstateVirutaComponent } from './rdstate-viruta.component';

describe('RDstateVirutaComponent', () => {
  let component: RDstateVirutaComponent;
  let fixture: ComponentFixture<RDstateVirutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RDstateVirutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDstateVirutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
