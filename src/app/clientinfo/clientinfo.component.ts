import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ClientinfoService } from '../clientinfo.service';
import { Router } from '@angular/router';
import { Client } from '../client';
import { NgToastService } from 'ng-angular-popup';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientinfo',
  templateUrl: './clientinfo.component.html',
  styleUrls: ['./clientinfo.component.css'],
})
export class ClientinfoComponent implements OnInit {
  constructor(
    private cliService: ClientinfoService,
    private router: Router,
    private toast: NgToastService
  ) {}

  clidetails: Client[] = [];
  displayedColumns: string[] = [
    'ID',
    'ClientName',
    'Address',
    'Email',
    'Password',
    'Operations',
  ];

  cli: Client = new Client(0, '', '', '', '');
  msg: string = '';
  repeatPassword: string = ''; // Initialize repeatPassword variable

  ngOnInit(): void {
    this.showAllClientsDetails();
  }

  showAllClientsDetails() {
    this.cliService.showAllClients().subscribe((data) => {
      this.clidetails = data;
    });
  }

  saveClient(regForm: NgForm) {
    if (regForm.invalid) {
      // Check if the form is invalid (touched and with errors)
      this.toast.error({
        detail: 'Error',
        summary: 'Fill out all the fields first',
        duration: 3000,
      });
      return;
    }
    if (this.cli.id === 0) {
      this.toast.error({
        detail: 'Error',
        summary: 'Client ID should not be 0',
        duration: 3000,
      });
      return;
    }

    if (this.cli.Password !== this.repeatPassword) {
      this.toast.error({
        detail: 'Error',
        summary: 'Passwords do not match',
        duration: 3000,
      });
      return;
    }

    this.cliService.addNewClient(this.cli).subscribe((data) => {
      console.log(data);
      this.showAllClientsDetails();
      this.toast.success({
        detail: 'Success',
        summary: 'Customer Added Successfuly',
        duration: 3000,
      });
    });
  }
  viewClient(id: number) {
    this.router.navigate(['/oneclient', id]);
  }

  modifyClient(id: number) {
    this.router.navigate(['/modifyclient', id]);
  }

  delCli(id: number) {
    if (confirm('Are u sure to delete?') == true) {
      this.cliService.deleteCLient(id).subscribe((data) => {
        this.toast.success({
          detail: 'Success',
          summary: 'Client Deleted Successfuly',
          duration: 3000,
        });
        this.showAllClientsDetails();
      });
    }
  }
}
