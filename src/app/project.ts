export class Project {
  id: number = 0;
  ProjectName: string = '';
  Duration: string = '';
  ClientID: number = 0;

  constructor(
    id: number,
    projectname: string,
    duration: string,
    clientid: number
  ) {
    this.id = id;
    this.ProjectName = projectname;
    this.Duration = duration;
    this.ClientID = clientid;
  }
}
