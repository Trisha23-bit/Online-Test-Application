import { Component, OnInit } from '@angular/core';
import questionsjson from '../../Utils/question.json';
const questionsarray = questionsjson;

export interface Question {
  questionid: number;
  question: string;
  options: Array<string>;
  correct: number;
  answer: number | null;
}

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component {
  questions: Array<Question> = [];
  name: string = '';
  selected_question_id: number = 1;
  selected_question: Question | undefined;
  submitted: Boolean = false;
  review: Boolean = false;
  results: any;

  constructor() {
    this.questions = JSON.parse(JSON.stringify(questionsarray));
    this.selected_question = this.questions.find(
      (item: Question) => item.questionid === this.selected_question_id
    );
  }

  onNext() {
    if (this.selected_question_id < this.questions.length) {
      this.selected_question_id = this.selected_question_id + 1;
      const question_index = this.questions.findIndex(
        (item) => item.questionid === this.selected_question_id
      );
      this.selected_question = this.questions[question_index];
    } else if (this.selected_question_id === this.questions.length) {
       this.submitTest()
    }
  }
  submitTest() {
    this.submitted = true;
    this.results = this.questions
      this.questions = JSON.parse(JSON.stringify(questionsarray));
  }

  onGoBack(){
    this.review = false;
  }

  onReview(){
    this.review = true
  }

  onBack() {
    if (this.selected_question_id > 1) {
      this.selected_question_id = this.selected_question_id - 1;
      const question_index = this.questions.findIndex(
        (item) => item.questionid === this.selected_question_id
      );
      this.selected_question = this.questions[question_index];
    }
  }

  updateAnswer(selected_option: any) {
    const question_index = this.questions.findIndex(
      (item) => item.questionid === this.selected_question_id
    );
    const newquestionarray = [...this.questions];
    newquestionarray[question_index].answer = parseInt(selected_option);
    this.questions = newquestionarray;
  }
}
