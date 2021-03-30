import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../test1/test1.component';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() question_answers: Array<Question> = [
    { questionid: 0, question: '', options: [], correct: 0, answer: null },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
