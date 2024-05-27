import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequrestFormComponent } from './leave-requrest-form.component';

describe('LeaveRequrestFormComponent', () => {
  let component: LeaveRequrestFormComponent;
  let fixture: ComponentFixture<LeaveRequrestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveRequrestFormComponent]
    });
    fixture = TestBed.createComponent(LeaveRequrestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
