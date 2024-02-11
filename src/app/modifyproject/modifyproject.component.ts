import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projectservice } from '../projectservice';
import { Project } from '../project';
import { Client } from '../client';
import { ClientinfoService } from '../clientinfo.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-modifyproject',
  templateUrl: './modifyproject.component.html',
  styleUrls: ['./modifyproject.component.css'],
})
export class ModifyprojectComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private proServ: Projectservice,
    private router: Router,
    private cliService: ClientinfoService,
  ) {}
  pro: Project = new Project(0, '', '', 0);
  prono: number = 0;
  clidetails: Client[] = [];

  ngOnInit(): void {
    this.prono = this.activateRoute.snapshot.params['id'];
    console.log('Fetching Project with ID:', this.prono);
    this.proServ.getProjectBasedOnId(this.prono).subscribe((data) => {
      this.pro = data;
    });
    this.showAllClientsDetails();
  }
  showAllClientsDetails() {
    this.cliService.showAllClients().subscribe((data) => {
      this.clidetails = data;
    });
  }

  updatepro() {
    this.proServ.updateProject(this.prono, this.pro).subscribe((data) => {
      this.router.navigate(['/projectsinfo']);
    });
  }
}
