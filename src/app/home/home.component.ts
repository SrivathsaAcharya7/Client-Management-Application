import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ClientinfoService } from '../clientinfo.service';
import { Projectservice } from '../projectservice';

import { Client } from '../client';
import { Project } from '../project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private cliService: ClientinfoService,
    private proService: Projectservice,
    private router: Router
  ) {}

  clidetails: Client[] = [];
  displayedColumns: string[] = [
    'ID',
    'ClientName',
    'Address',
    'Email',
    'Password',
  ];

  prodetails: Project[] = [];
  displayedColumn: string[] = ['ID', 'ProjectName', 'Duration', 'ClientID'];

  ngOnInit(): void {
    this.showAllClientsDetails();
    this.showAllProjectDetails();
  }

  showAllClientsDetails() {
    this.cliService.showAllClients().subscribe((data) => {
      this.clidetails = data;
    });
  }
  showAllProjectDetails() {
    this.proService.showAllProjects().subscribe((data) => {
      this.prodetails = data;
    });
  }
}
