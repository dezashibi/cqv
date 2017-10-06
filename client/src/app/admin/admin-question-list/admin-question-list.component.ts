import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Question} from '../../models/question';
import {QuestionService} from '../../services/question.service';

@Component({
  selector: 'cqv-admin-question-list',
  templateUrl: './admin-question-list.component.html',
  styleUrls: ['./admin-question-list.component.css']
})
export class AdminQuestionListComponent implements OnInit {
  questions: Observable<Question[]>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

}
