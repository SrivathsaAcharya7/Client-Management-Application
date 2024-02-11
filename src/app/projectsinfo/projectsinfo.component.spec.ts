import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsinfoComponent } from './projectsinfo.component';

describe('ProjectsinfoComponent', () => {
  let component: ProjectsinfoComponent;
  let fixture: ComponentFixture<ProjectsinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsinfoComponent]
    });
    fixture = TestBed.createComponent(ProjectsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
