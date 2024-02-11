import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientManagementApp';
  constructor(private router: Router) { }
  shouldShowNavBar(): boolean {
    // Determine if the navigation bar should be shown based on the current route
    const currentRoute = this.router.url;
    return currentRoute !== '/welcome' && currentRoute !== '/login'&& currentRoute !=='/'&& currentRoute !=='/dprojectinfo'&& currentRoute !=='/dprojecttask' && currentRoute !=='/dclient';
}
  
}
