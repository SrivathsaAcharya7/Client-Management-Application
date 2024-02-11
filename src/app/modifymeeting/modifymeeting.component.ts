import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from '../clientinfo.service';
import { Client } from '../client';
import { MeetinginfoService } from '../meetinginfo.service';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-modifymeeting',
  templateUrl: './modifymeeting.component.html',
  styleUrls: ['./modifymeeting.component.css'],
})
export class ModifymeetingComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private mtServ: MeetinginfoService,
    private cliServ: ClientinfoService,
    private router: Router
  ) {}
  mtd: Meeting = new Meeting(0, '', 0, '', 0, '');
  mtno: number = 0;
  selectedTime: string = '';

  ngOnInit(): void {
    this.mtno = this.activateRoute.snapshot.params['id'];
    console.log('Fetching meeting with ID:', this.mtno);
    this.mtServ.getMeetingBasedOnId(this.mtno).subscribe((data) => {
      this.mtd = data;
    });
  }

  updatemt() {
    const startDate = new Date(this.mtd.Start_Date_Time);

    // Format the Date object to "dd/mm/yyyy"
    const formattedDate = this.formatDate(startDate, this.selectedTime);

    // Update mt.Start_Date_Time with the formatted date
    this.mtd.Start_Date_Time = formattedDate;

    this.mtServ.updateMeeting(this.mtno, this.mtd).subscribe((data) => {
      this.router.navigate(['/meetinginfo']);
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
