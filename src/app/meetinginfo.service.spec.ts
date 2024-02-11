import { TestBed } from '@angular/core/testing';

import { MeetinginfoService } from './meetinginfo.service';

describe('MeetinginfoService', () => {
  let service: MeetinginfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetinginfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
