import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentReportsComponent } from './admin-student-reports.component';

describe('AdminStudentReportsComponent', () => {
  let component: AdminStudentReportsComponent;
  let fixture: ComponentFixture<AdminStudentReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminStudentReportsComponent]
    });
    fixture = TestBed.createComponent(AdminStudentReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
