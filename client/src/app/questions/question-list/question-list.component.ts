import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Question} from '../../models/question';
import {QuestionService} from '../../services/question.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'cqv-question-list',
    templateUrl: './question-list.component.html',
    styles: []
})
export class QuestionListComponent implements OnInit {
    @ViewChild('description') descriptionElement: ElementRef;
    @ViewChild('name') nameElement: ElementRef;

    questions: Observable<Question[]>;
    constructor(private questionService: QuestionService) {
    }

    ngOnInit() {
        this.loadData();
    }

    onRefreshMe(e) {
        this.loadData();
    }

    loadData() {
        this.questions = this.questionService.getQuestions();
        this.descriptionElement.nativeElement.value = '';
    }

    createQuestion(question) {
        this.questionService.addQuestion(question)
            .subscribe(
                question => {
                    console.log(question);
                    this.loadData();
                },
                error => console.log(<any>error)
            );
    }

}
