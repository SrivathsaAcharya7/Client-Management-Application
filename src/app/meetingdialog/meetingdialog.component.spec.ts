import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingdialogComponent } from './meetingdialog.component';

describe('MeetingdialogComponent', () => {
  let component: MeetingdialogComponent;
  let fixture: ComponentFixture<MeetingdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingdialogComponent]
    });
    fixture = TestBed.createComponent(MeetingdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
