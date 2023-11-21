import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewquestionComponent } from './admin-viewquestion.component';

describe('AdminViewquestionComponent', () => {
  let component: AdminViewquestionComponent;
  let fixture: ComponentFixture<AdminViewquestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewquestionComponent]
    });
    fixture = TestBed.createComponent(AdminViewquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
