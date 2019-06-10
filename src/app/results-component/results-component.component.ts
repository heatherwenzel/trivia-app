import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-results-component',
  templateUrl: './results-component.component.html',
  styleUrls: ['./results-component.component.css']
})
export class ResultsComponentComponent implements OnInit {
  scores: any = [];
  userScore: number;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.userScore = this.quizService.score;
  }
}
