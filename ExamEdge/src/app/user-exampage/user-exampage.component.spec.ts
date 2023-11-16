import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExampageComponent } from './user-exampage.component';

describe('UserExampageComponent', () => {
  let component: UserExampageComponent;
  let fixture: ComponentFixture<UserExampageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserExampageComponent]
    });
    fixture = TestBed.createComponent(UserExampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
