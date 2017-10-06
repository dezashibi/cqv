import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../models/question';
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'cqv-question',
  templateUrl: './question.component.html',
  styles: []
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

  onVoteQuestion(question: Question) {

      if(!localStorage.getItem(question._id)) {
          if(!question.isAnswered) {
              localStorage.setItem(question._id, '1');
              question.popularity++;
              this.questionService.raiseQuestion(question._id)
                  .subscribe(
                      res => {
                          console.log(res);
                      },
                      error => console.log(<any>error)
                  );
              console.log('Vote for ' + question.description);
          }
      }

  }

}
