import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { Projectservice } from '../projectservice';

@Component({
  selector: 'app-dashboardclient',
  templateUrl: './dashboardclient.component.html',
  styleUrls: ['./dashboardclient.component.css'],
})
export class DashboardclientComponent implements OnInit {
  cliName: any = '';
  cliId: any = '';
  pro: Project[] = [];
  displayedColumns: string[] = ['ID', 'ProjectName', 'Duration', 'ClientID'];
  constructor(private proServ: Projectservice) {}
  ngOnInit(): void {
    this.cliName = sessionStorage.getItem('user');
    this.cliId = sessionStorage.getItem('clid');

    this.proServ.getProjectsByClientId(this.cliId).subscribe((data) => {
      this.pro = data;
      console.log(data);
    });
  }
}
