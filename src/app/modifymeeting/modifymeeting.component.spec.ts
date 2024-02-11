import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifymeetingComponent } from './modifymeeting.component';

describe('ModifymeetingComponent', () => {
  let component: ModifymeetingComponent;
  let fixture: ComponentFixture<ModifymeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifymeetingComponent]
    });
    fixture = TestBed.createComponent(ModifymeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
