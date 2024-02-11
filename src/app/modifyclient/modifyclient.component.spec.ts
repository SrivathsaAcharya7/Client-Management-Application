import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyclientComponent } from './modifyclient.component';

describe('ModifyclientComponent', () => {
  let component: ModifyclientComponent;
  let fixture: ComponentFixture<ModifyclientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyclientComponent]
    });
    fixture = TestBed.createComponent(ModifyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
