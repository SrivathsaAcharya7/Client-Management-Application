import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetinginfoService } from '../meetinginfo.service';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-viewmeeting',
  templateUrl: './viewmeeting.component.html',
  styleUrls: ['./viewmeeting.component.css'],
})
export class ViewmeetingComponent implements OnInit {
  mtno: number = 0;

  constructor(
    private activeroute: ActivatedRoute,
    private mtServ: MeetinginfoService
  ) {}

  mt: Meeting = new Meeting(0, '', 0, '', 0, '');

  ngOnInit(): void {
    this.mtno = this.activeroute.snapshot.params['id'];
    this.mtServ.getMeetingBasedOnId(this.mtno).subscribe((data) => {
      this.mt = data;
    });
  }
}
