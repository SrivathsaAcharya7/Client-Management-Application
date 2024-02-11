import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';

import { Task } from '../task';
import { TaskdialogComponent } from '../taskdialog/taskdialog.component';

@Component({
  selector: 'app-projecttask',
  templateUrl: './projecttask.component.html',
  styleUrls: ['./projecttask.component.css'],
})
export class ProjecttaskComponent implements OnInit {
  constructor(
    private taskServ: TaskService,
    private router: Router,
    private toast: NgToastService,
    private dialog: MatDialog
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(TaskdialogComponent, {
      width: '50%',
    });

    dialogRef.componentInstance.taskAdded.subscribe((result) => {
      this.showAllTaskDetails();
    });
  }

  taskdetails: Task[] = [];
  displayedColumns: string[] = [
    'ID',
    'TaskName',
    'TaskDescription',
    'ProjectID',
    'Operations',
  ];

  ngOnInit(): void {
    this.showAllTaskDetails();
  }

  showAllTaskDetails() {
    this.taskServ.showAllTasks().subscribe((data) => {
      this.taskdetails = data;
    });
  }

  viewProjectTask(id: number) {
    this.router.navigate(['/viewtask', id]);
  }

  modifyTask(id: number) {
    this.router.navigate(['/modifytask', id]);
  }

  delTask(id: number) {
    if (confirm('Are u sure to delete?') == true) {
      this.taskServ.deleteTask(id).subscribe((data) => {
        this.toast.success({
          detail: 'Success',
          summary: 'Project Task Deleted Successfuly',
          duration: 3000,
        });
        this.showAllTaskDetails();
      });
    }
  }
}
