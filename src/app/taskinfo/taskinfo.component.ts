import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-taskinfo',
  templateUrl: './taskinfo.component.html',
  styleUrls: ['./taskinfo.component.css'],
})
export class TaskinfoComponent implements OnInit {
  projectId: number = 0; // Variable to hold the projectId
  taskdetails: Task[] = [];
  displayedColumns: string[] = [
    'ID',
    'TaskName',
    'TaskDescription',
    'ProjectID',
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private taskServ: TaskService
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.activatedRoute.params.subscribe((params) => {
      // Get the projectId parameter from the route
      this.projectId = +params['projectId']; // "+" is to convert it to a number
      // Fetch tasks based on the projectId
      this.fetchTasks();
    });
  }

  fetchTasks() {
    // Fetch tasks by projectId
    this.taskServ.getTasksByProjectId(this.projectId).subscribe((data) => {
      // Update taskdetails with fetched data
      this.taskdetails = data;
    });
  }
}
