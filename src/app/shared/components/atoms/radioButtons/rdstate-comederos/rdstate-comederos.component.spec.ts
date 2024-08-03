import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDstateComederosComponent } from './rdstate-comederos.component';

describe('RDstateComederosComponent', () => {
  let component: RDstateComederosComponent;
  let fixture: ComponentFixture<RDstateComederosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RDstateComederosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDstateComederosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
