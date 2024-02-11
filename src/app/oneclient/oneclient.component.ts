import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientinfoService } from '../clientinfo.service';
import { Client } from '../client';

@Component({
  selector: 'app-oneclient',
  templateUrl: './oneclient.component.html',
  styleUrls: ['./oneclient.component.css'],
})
export class OneclientComponent implements OnInit {
  custono: number = 0;

  constructor(
    private activeroute: ActivatedRoute,
    private cliServ: ClientinfoService
  ) {}

  cli: Client = new Client(0, '', '', '', '');

  ngOnInit(): void {
    this.custono = this.activeroute.snapshot.params['id'];
    this.cliServ.getClientBasedOnId(this.custono).subscribe((data) => {
      this.cli = data;
    });
  }
}
