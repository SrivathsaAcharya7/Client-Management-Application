export class Meeting {
  id: number = 0;
  MeetingTopic: string = '';
  No_of_Persons: number = 0;
  Start_Date_Time: string = '';
  ClientID: number = 0;
  Status: string = '';

  constructor(
    id: number,
    meetingtopic: string,
    noofpersons: number,
    startdatetime: string,
    clientid: number,
    status: string
  ) {
    this.id = id;
    this.MeetingTopic = meetingtopic;
    this.No_of_Persons = noofpersons;
    this.Start_Date_Time = startdatetime;
    this.ClientID = clientid;
    this.Status = status;
  }
}
