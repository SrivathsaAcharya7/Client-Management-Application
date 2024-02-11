export class Task {
  id: number = 0;
  TaskName: string = '';
  TaskDescription: string = '';
  ProjectID: number = 0;

  constructor(
    id: number,
    taskname: string,
    taskdescription: string,
    projectid: number
  ) {
    this.id = id;
    this.TaskName = taskname;
    this.TaskDescription = taskdescription;
    this.ProjectID = projectid;
  }
}
