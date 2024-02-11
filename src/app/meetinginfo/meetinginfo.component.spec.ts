import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetinginfoComponent } from './meetinginfo.component';

describe('MeetinginfoComponent', () => {
  let component: MeetinginfoComponent;
  let fixture: ComponentFixture<MeetinginfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetinginfoComponent]
    });
    fixture = TestBed.createComponent(MeetinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
