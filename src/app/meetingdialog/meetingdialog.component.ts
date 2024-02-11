import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MeetinginfoService } from '../meetinginfo.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Meeting } from '../meeting';
import { ClientinfoService } from '../clientinfo.service';
import { Client } from '../client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meetingdialog',
  templateUrl: './meetingdialog.component.html',
  styleUrls: ['./meetingdialog.component.css'],
})
export class MeetingdialogComponent implements OnInit {
  @Output() taskAdded: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private mtServ: MeetinginfoService,
    private router: Router,
    private toast: NgToastService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<MeetingdialogComponent>,
    private cliServ: ClientinfoService
  ) {}

  selectedTime: string = '';
  meetingdetails: Meeting[] = [];
  clidetails: Client[] = [];
  mt: Meeting = new Meeting(0, '', 0, '', 0, '');

  ngOnInit(): void {
    this.showAllMeetingDetails();
    this.showAllClientDetails();
  }

  showAllMeetingDetails() {
    this.mtServ.showAllMeetings().subscribe((data) => {
      this.meetingdetails = data;
    });
  }
  showAllClientDetails() {
    this.cliServ.showAllClients().subscribe((data) => {
      this.clidetails = data;
    });
  }
  saveMeeting(meetingForm: NgForm) {
    if (this.mt.id === 0) {
      this.toast.error({
        detail: 'Error',
        summary: 'Meeting ID should not be 0',
        duration: 3000,
      });
      return;
    }

    const startDate = new Date(this.mt.Start_Date_Time);

    // Format the Date object to "dd/mm/yyyy"
    const formattedDate = this.formatDate(startDate, this.selectedTime);

    // Update mt.Start_Date_Time with the formatted date
    this.mt.Start_Date_Time = formattedDate;

    this.mtServ.addNewMeeting(this.mt).subscribe((data) => {
      console.log(data);

      this.toast.success({
        detail: 'Success',
        summary: 'New Meeting Added Successfuly',
        duration: 3000,
      });
      // this.showAllProjectDetails();

      this.router.navigate(['/meetinginfo']);
      this.taskAdded.emit();
      this.dialogRef.close();
    });
  }

  private formatDate(date: Date, selectedTime: string): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    // Pad day and month with leading zeros if necessary
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;

    // Concatenate formatted date with selectedTime
    const formattedDate = `${formattedDay}/${formattedMonth}/${year} ${selectedTime}`;

    return formattedDate;
  }
}
