import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneclientComponent } from './oneclient.component';

describe('OneclientComponent', () => {
  let component: OneclientComponent;
  let fixture: ComponentFixture<OneclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneclientComponent]
    });
    fixture = TestBed.createComponent(OneclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
