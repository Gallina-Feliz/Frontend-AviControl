import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDstateViruta2Component } from './rdstate-viruta2.component';

describe('RDstateViruta2Component', () => {
  let component: RDstateViruta2Component;
  let fixture: ComponentFixture<RDstateViruta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RDstateViruta2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDstateViruta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
