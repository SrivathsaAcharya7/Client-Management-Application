import { Component, OnInit } from '@angular/core';
import { MeetinginfoService } from '../meetinginfo.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { Meeting } from '../meeting';
import { MeetingdialogComponent } from '../meetingdialog/meetingdialog.component';

@Component({
  selector: 'app-meetinginfo',
  templateUrl: './meetinginfo.component.html',
  styleUrls: ['./meetinginfo.component.css'],
})
export class MeetinginfoComponent implements OnInit {
  constructor(
    private mtServ: MeetinginfoService,
    private router: Router,
    private toast: NgToastService,
    private dialog: MatDialog
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(MeetingdialogComponent, {
      width: '30%',
    });
    dialogRef.componentInstance.taskAdded.subscribe((result) => {
      this.showAllMeetingDetails();
    });
  }

  meetingdetails: Meeting[] = [];
  displayedColumns: string[] = [
    'ID',
    'MeetingTopic',
    'No_of_Persons',
    'Start_Date_Time',
    'ClientID',
    'Status',
    'Operations',
  ];

  ngOnInit(): void {
    this.showAllMeetingDetails();
  }

  showAllMeetingDetails() {
    this.mtServ.showAllMeetings().subscribe((data) => {
      this.meetingdetails = data;
    });
  }
  modifyMeeting(id: number) {
    this.router.navigate(['/modifymeeting', id]);
  }

  viewMeeting(id: number) {
    this.router.navigate(['/viewmeeting', id]);
  }

  delMeeting(id: number) {
    if (confirm('Are u sure to delete?') == true) {
      this.mtServ.deleteMeeting(id).subscribe((data) => {
        this.toast.success({
          detail: 'Success',
          summary: 'Meeting Deleted Successfuly',
          duration: 3000,
        });
        this.showAllMeetingDetails();
      });
    }
  }
}
