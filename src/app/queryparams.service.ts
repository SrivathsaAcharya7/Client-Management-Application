import { Injectable } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueryparamsService {
  private activeTab: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Subscribe to router events to update activeTab when navigation ends
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeTab = +this.route.snapshot.queryParams['tab'] || 0;
      });
  }

  getActiveTab(): number {
    return this.activeTab;
  }

  setActiveTab(tab: number): void {
    this.activeTab = tab;
    this.router.navigate(['/home'], {
      relativeTo: this.route,
      queryParams: { tab: tab },
    });
  }
}
