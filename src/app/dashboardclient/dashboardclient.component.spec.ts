import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardclientComponent } from './dashboardclient.component';

describe('DashboardclientComponent', () => {
  let component: DashboardclientComponent;
  let fixture: ComponentFixture<DashboardclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardclientComponent]
    });
    fixture = TestBed.createComponent(DashboardclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
