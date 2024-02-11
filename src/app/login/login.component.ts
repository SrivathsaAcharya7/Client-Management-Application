import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Client } from '../client';
import { ClientinfoService } from '../clientinfo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  pswd: string = '';
  msg: string = '';
  clientinfo: Client[] = [];

  constructor(
    private cliServ: ClientinfoService,
    private router: Router,
    private toast: NgToastService
  ) {
    sessionStorage.clear();
    this.cliServ.showAllClients().subscribe((data) => {
      this.clientinfo = data;
    });
  }

  UserCheck() {
    let uchk = false;
    if (this.username == '' && this.pswd == '') {
      this.toast.error({
        detail: 'Failed',
        summary: 'Fill in Username and Password Fields',
        duration: 3000,
      });
    } else if (this.username == 'hr@gmail.com' && this.pswd == 'hr@123') {
      sessionStorage.setItem('adminuser', this.username);
      this.router.navigate(['/home']);
    } else {
      for (let i = 0; i < this.clientinfo.length; i++) {
        if (
          this.clientinfo[i].Email == this.username &&
          this.clientinfo[i].Password == this.pswd
        ) {
          sessionStorage.setItem('user', this.clientinfo[i].ClientName);
          sessionStorage.setItem('clid', this.clientinfo[i].id.toString());
          uchk = true;
          break;
        }
      }

      if (uchk) {
        this.router.navigate(['/dclient']);
      } else {
        this.toast.error({
          detail: 'Failed',
          summary: 'Incorrect Username/Password',
          duration: 3000,
        });
      }
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
