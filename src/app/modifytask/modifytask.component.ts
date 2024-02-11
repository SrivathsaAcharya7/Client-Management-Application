import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Project } from '../project';
import { Projectservice } from '../projectservice';

@Component({
  selector: 'app-modifytask',
  templateUrl: './modifytask.component.html',
  styleUrls: ['./modifytask.component.css'],
})
export class ModifytaskComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private taskServ: TaskService,
    private proServ: Projectservice,
    private router: Router
  ) {}
  task: Task = new Task(0, '', '', 0);
  tno: number = 0;
  prodetails: Project[] = [];

  ngOnInit(): void {
    this.tno = this.activateRoute.snapshot.params['id'];
    console.log('Fetching task with ID:', this.tno);
    this.taskServ.getTaskBasedOnId(this.tno).subscribe((data) => {
      this.task = data;
    });
    this.showAllProjectDetails();
  }
  showAllProjectDetails() {
    this.proServ.showAllProjects().subscribe((data) => {
      this.prodetails = data;
    });
  }

  updatetask() {
    this.taskServ.updateTask(this.tno, this.task).subscribe((data) => {
      this.router.navigate(['/projecttask']);
    });
  }
}
