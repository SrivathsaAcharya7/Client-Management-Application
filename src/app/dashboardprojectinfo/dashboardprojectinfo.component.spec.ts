import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardprojectinfoComponent } from './dashboardprojectinfo.component';

describe('DashboardprojectinfoComponent', () => {
  let component: DashboardprojectinfoComponent;
  let fixture: ComponentFixture<DashboardprojectinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardprojectinfoComponent]
    });
    fixture = TestBed.createComponent(DashboardprojectinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
