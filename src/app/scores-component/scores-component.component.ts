import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";

@Component({
  selector: "app-scores-component",
  templateUrl: "./scores-component.component.html",
  styleUrls: ["./scores-component.component.css"]
})
export class ScoresComponentComponent implements OnInit {
  scores: any = [];

  constructor(private quizService: QuizService) {
  }

  ngOnInit() {
    this.quizService.getScores().subscribe(response => {
      this.scores = response;
    });
  }
}
