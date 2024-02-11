import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Client } from '../client';
import { ClientinfoService } from '../clientinfo.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Project } from '../project';
import { Projectservice } from '../projectservice';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Output() taskAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private cliService: ClientinfoService,
    private router: Router,
    private toast: NgToastService,
    private proServ: Projectservice,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  pro: Project = new Project(0, '', '', 0);
  clidetails: Client[] = [];
  prodetails: Project[] = [];

  ngOnInit(): void {
    this.showAllProjectDetails();
    this.showAllClientsDetails();
  }
  showAllProjectDetails() {
    this.proServ.showAllProjects().subscribe((data) => {
      this.prodetails = data;
    });
  }

  showAllClientsDetails() {
    this.cliService.showAllClients().subscribe((data) => {
      this.clidetails = data;
    });
  }

  saveProject(projectForm: NgForm) {
    if (this.pro.id === 0) {
      this.toast.error({
        detail: 'Error',
        summary: 'Project ID should not be 0',
        duration: 3000,
      });
      return;
    }
    if (this.pro.ClientID === 0) {
      this.toast.error({
        detail: 'Error',
        summary: 'Choose a client ID from drop down',
        duration: 3000,
      });
      return;
    }

    this.proServ.addNewProject(this.pro).subscribe((data) => {
      console.log(data);
      this.showAllProjectDetails();
      this.toast.success({
        detail: 'Success',
        summary: 'Project Added Successfuly',
        duration: 3000,
      });

      // this.router.navigate(['/projectsinfo'])
      this.taskAdded.emit();
      this.dialogRef.close();
    });
  }
}
