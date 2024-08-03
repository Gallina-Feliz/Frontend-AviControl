import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDstateComidaComponent } from './rdstate-comida.component';

describe('RDstateComidaComponent', () => {
  let component: RDstateComidaComponent;
  let fixture: ComponentFixture<RDstateComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RDstateComidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDstateComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
