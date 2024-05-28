import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDataComponent } from './employees-data.component';

describe('EmployeesDataComponent', () => {
  let component: EmployeesDataComponent;
  let fixture: ComponentFixture<EmployeesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesDataComponent]
    });
    fixture = TestBed.createComponent(EmployeesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
