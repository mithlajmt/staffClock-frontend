import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceDataComponent } from './attendence-data.component';

describe('AttendenceDataComponent', () => {
  let component: AttendenceDataComponent;
  let fixture: ComponentFixture<AttendenceDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendenceDataComponent]
    });
    fixture = TestBed.createComponent(AttendenceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
