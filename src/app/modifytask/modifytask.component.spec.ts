import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifytaskComponent } from './modifytask.component';

describe('ModifytaskComponent', () => {
  let component: ModifytaskComponent;
  let fixture: ComponentFixture<ModifytaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifytaskComponent]
    });
    fixture = TestBed.createComponent(ModifytaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
