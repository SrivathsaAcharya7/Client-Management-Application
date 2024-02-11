import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Project } from '../project';
import { Projectservice } from '../projectservice';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-projectsinfo',
  templateUrl: './projectsinfo.component.html',
  styleUrls: ['./projectsinfo.component.css'],
})
export class ProjectsinfoComponent implements OnInit {
  constructor(
    private proService: Projectservice,
    private router: Router,
    private toast: NgToastService,
    private dialog: MatDialog,
    private taskService: TaskService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
    });
    dialogRef.componentInstance.taskAdded.subscribe((result) => {
      this.showAllProjectDetails();
    });
  }

  prodetails: Project[] = [];
  displayedColumns: string[] = [
    'ID',
    'ProjectName',
    'Duration',
    'ClientID',
    'Operations',
  ];

  ngOnInit(): void {
    this.showAllProjectDetails();
  }

  showTasksForProject(projectId: any) {
    // Navigate to task info component with project ID as route parameter
    this.router.navigate(['/taskinfo', projectId]);
  }

  showAllProjectDetails() {
    this.proService.showAllProjects().subscribe((data) => {
      this.prodetails = data;
    });
  }
  modifyProject(id: number) {
    this.router.navigate(['/modifyproject', id]);
  }

  delPro(id: number) {
    if (confirm('Are u sure to delete?') == true) {
      this.proService.deleteProject(id).subscribe((data) => {
        this.toast.success({
          detail: 'Success',
          summary: 'Project Deleted Successfuly',
          duration: 3000,
        });
        this.showAllProjectDetails();
      });
    }
  }
}
