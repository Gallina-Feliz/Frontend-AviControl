import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDstateComederos2Component } from './rdstate-comederos2.component';

describe('RDstateComederos2Component', () => {
  let component: RDstateComederos2Component;
  let fixture: ComponentFixture<RDstateComederos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RDstateComederos2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDstateComederos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
