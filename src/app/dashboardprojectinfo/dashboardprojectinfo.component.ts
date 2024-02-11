import { Component } from '@angular/core';
import { Project } from '../project';
import { Task } from '../task';
import { Projectservice } from '../projectservice';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboardprojectinfo',
  templateUrl: './dashboardprojectinfo.component.html',
  styleUrls: ['./dashboardprojectinfo.component.css'],
})
export class DashboardprojectinfoComponent {
  cliName: any = '';
  cliId: any = '';
  projects: Project[] = [];
  displayedColumns: string[] = [
    'ID',
    'TaskName',
    'TaskDescription',
    'ProjectID',
  ];
  tasks: Task[] = [];

  constructor(
    private projectService: Projectservice,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.cliName = sessionStorage.getItem('user');
    this.cliId = sessionStorage.getItem('clid');

    // Fetch projects based on client ID
    this.projectService
      .getProjectsByClientId(this.cliId)
      .subscribe((projects) => {
        this.projects = projects;
        // For each project, fetch associated tasks
        this.projects.forEach((project) => {
          this.taskService
            .getTasksByProjectId(project.id)
            .subscribe((tasks) => {
              this.tasks.push(...tasks);
            });
        });
      });
  }
}
