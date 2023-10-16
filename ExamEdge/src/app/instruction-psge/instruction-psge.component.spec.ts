import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionPsgeComponent } from './instruction-psge.component';

describe('InstructionPsgeComponent', () => {
  let component: InstructionPsgeComponent;
  let fixture: ComponentFixture<InstructionPsgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructionPsgeComponent]
    });
    fixture = TestBed.createComponent(InstructionPsgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
