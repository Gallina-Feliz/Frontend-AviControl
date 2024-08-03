import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDstateAguaComponent } from './rdstate-agua.component';

describe('RDstateAguaComponent', () => {
  let component: RDstateAguaComponent;
  let fixture: ComponentFixture<RDstateAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RDstateAguaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RDstateAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
