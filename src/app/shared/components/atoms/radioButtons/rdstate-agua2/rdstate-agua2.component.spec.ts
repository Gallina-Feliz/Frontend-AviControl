import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDstateAgua2Component } from './rdstate-agua2.component';

describe('RDstateAgua2Component', () => {
  let component: RDstateAgua2Component;
  let fixture: ComponentFixture<RDstateAgua2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RDstateAgua2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDstateAgua2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
