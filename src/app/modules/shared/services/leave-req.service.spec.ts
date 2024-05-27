import { TestBed } from '@angular/core/testing';

import { LeaveReqService } from './leave-req.service';

describe('LeaveReqService', () => {
  let service: LeaveReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
