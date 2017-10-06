import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestionDeleteComponent } from './admin-question-delete.component';

describe('AdminQuestionDeleteComponent', () => {
  let component: AdminQuestionDeleteComponent;
  let fixture: ComponentFixture<AdminQuestionDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuestionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
