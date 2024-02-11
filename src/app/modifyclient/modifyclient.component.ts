import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientinfoService } from '../clientinfo.service';
import { Client } from '../client';

@Component({
  selector: 'app-modifyclient',
  templateUrl: './modifyclient.component.html',
  styleUrls: ['./modifyclient.component.css'],
})
export class ModifyclientComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private cliServ: ClientinfoService,
    private router: Router
  ) {}
  cli: Client = new Client(0, '', '', '', '');
  clino: number = 0;

  ngOnInit(): void {
    this.clino = this.activateRoute.snapshot.params['id'];
    console.log('Fetching client with ID:', this.clino);
    this.cliServ.getClientBasedOnId(this.clino).subscribe((data) => {
      this.cli = data;
    });
  }

  updatecli() {
    this.cliServ.updateClient(this.clino, this.cli).subscribe((data) => {
      this.router.navigate(['/clientinfo']);
    });
  }
}
