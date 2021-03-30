import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../test1/test1.component';

@Component({
  selector: 'app-quiz-c',
  templateUrl: './quiz-c.component.html',
  styleUrls: ['./quiz-c.component.css'],
})
export class QuizCComponent implements OnInit {
  @Input() question_answers: Array<Question> = [
    { questionid: 0, question: '', options: [], correct: 0, answer: null },
  ];
  score = 0;
  total = 0;

  ngOnInit(): void {
    this.total = this.question_answers.length;
    this.score = this.calculateScore();
  }

  calculateScore() {
    let score = 0;
    this.question_answers.map((item) => {
      if (item.answer === item.correct) {
        score = score + 1;
      }
    });
    return score;
  }
}