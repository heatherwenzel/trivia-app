import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { QuizService } from "./quiz.service";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { QuizComponentComponent } from './quiz-component/quiz-component.component';
import { ResultsComponentComponent } from './results-component/results-component.component';
import { ScoresComponentComponent } from './scores-component/scores-component.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "/quiz", pathMatch: "full" },
  { path: "quiz", component: QuizComponentComponent },
  { path: "results", component: ResultsComponentComponent },
  { path: "scores", component: ScoresComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QuizComponentComponent,
    ResultsComponentComponent,
    ScoresComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
