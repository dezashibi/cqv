import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../../services/question.service';

@Component({
  selector: 'cqv-admin-question-delete',
  templateUrl: './admin-question-delete.component.html',
  styleUrls: ['./admin-question-delete.component.css']
})
export class AdminQuestionDeleteComponent implements OnInit, OnDestroy {
    id: any;
    params: any;


    constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService, private router: Router) { }

    ngOnInit() {
        this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
        this.questionService.deleteQuestion(this.id).subscribe(
            data => {
              console.log(data);
              this.router.navigate(['/admin/questions']);
            },
            error => console.log(<any>error));
    }

    ngOnDestroy() {
        this.params.unsubscribe();
    }

}
