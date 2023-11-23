import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditpageComponent } from './admin-editpage.component';

describe('AdminEditpageComponent', () => {
  let component: AdminEditpageComponent;
  let fixture: ComponentFixture<AdminEditpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditpageComponent]
    });
    fixture = TestBed.createComponent(AdminEditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

