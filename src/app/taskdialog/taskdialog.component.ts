import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../project';
import { Projectservice } from '../projectservice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-taskdialog',
  templateUrl: './taskdialog.component.html',
  styleUrls: ['./taskdialog.component.css'],
})
export class TaskdialogComponent {
  @Output() taskAdded: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private taskServ: TaskService,
    private router: Router,
    private toast: NgToastService,
    private dialog: MatDialog,
    private proServ: Projectservice,
    private dialogRef: MatDialogRef<TaskdialogComponent>
  ) {}

  taskdetails: Task[] = [];
  prodetails: Project[] = [];
  task: Task = new Task(0, '', '', 0);

  ngOnInit(): void {
    this.showAllTaskDetails();
    this.showAllProjectDetails();
  }

  showAllTaskDetails() {
    this.taskServ.showAllTasks().subscribe((data) => {
      this.taskdetails = data;
    });
  }
  showAllProjectDetails() {
    this.proServ.showAllProjects().subscribe((data) => {
      this.prodetails = data;
    });
  }
  saveTask(taskForm: NgForm) {
    if (this.task.id === 0) {
      this.toast.error({
        detail: 'Error',
        summary: 'Task ID should not be 0',
        duration: 3000,
      });
      return;
    }
    if (this.task.ProjectID === 0) {
      this.toast.error({
        detail: 'Error',
        summary: 'Choose atleast one Project from drop down',
        duration: 3000,
      });
      return;
    }

    this.taskServ.addNewTask(this.task).subscribe((data) => {
      console.log(data);
      this.showAllTaskDetails();
      this.toast.success({
        detail: 'Success',
        summary: 'New Task Added Successfuly',
        duration: 3000,
      });
      this.showAllTaskDetails();

      this.taskAdded.emit();
      this.dialogRef.close();
    });
  }
}
