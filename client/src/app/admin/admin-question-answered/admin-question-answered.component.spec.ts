import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestionAnsweredComponent } from './admin-question-answered.component';

describe('AdminQuestionAnsweredComponent', () => {
  let component: AdminQuestionAnsweredComponent;
  let fixture: ComponentFixture<AdminQuestionAnsweredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuestionAnsweredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestionAnsweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
