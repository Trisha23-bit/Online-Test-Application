import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Question } from '../test1/test1.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  @Input() data:any = {
    questionid: 0,
    question: '',
    options: [],
    correct:0,
    answer: null,
  };
  @Output() onChange = new EventEmitter<number>()

  option_map = ["A","B","C","D"]

  onSelect(value:number){
    this.onChange.emit(value)
  }

}
