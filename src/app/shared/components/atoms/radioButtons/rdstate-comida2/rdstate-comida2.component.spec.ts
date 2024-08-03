import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDstateComida2Component } from './rdstate-comida2.component';

describe('RDstateComida2Component', () => {
  let component: RDstateComida2Component;
  let fixture: ComponentFixture<RDstateComida2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RDstateComida2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDstateComida2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
