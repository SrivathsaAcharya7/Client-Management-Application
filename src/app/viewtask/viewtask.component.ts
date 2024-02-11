import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css'],
})
export class ViewtaskComponent implements OnInit {
  taskno: number = 0;

  constructor(
    private activeroute: ActivatedRoute,
    private taskServ: TaskService
  ) {}

  task: Task = new Task(0, '', '', 0);

  ngOnInit(): void {
    this.taskno = this.activeroute.snapshot.params['id'];
    this.taskServ.getTaskBasedOnId(this.taskno).subscribe((data) => {
      this.task = data;
    });
  }
}
