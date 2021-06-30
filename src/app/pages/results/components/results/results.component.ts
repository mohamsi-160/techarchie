import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../../services/question.service';
import { environment } from '@env/environment';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  version: string | null = environment.version;
  public recordedAnswers = [];
  public solutionPreReqs = [];
  public solutionUsers = [];
  public solutionFrontend = [];
  public solutionMiddleware = [];
  public solutionBackend = [];
  public solutionDeployment = [];
  private subject = new BehaviorSubject(this.recordedAnswers);

  constructor(public questionService: QuestionService) {
    log.debug('ResultsComponent - constructor');

  }

  ngOnInit() {
    log.debug('ResultsComponent - init');
    this.recordedAnswers = [{"QID":1,"AnswerID":1},{"QID":2,"AnswerID":4},{"QID":3,"AnswerID":6},{"QID":4,"AnswerID":8},{"QID":5,"AnswerID":12},{"QID":6,"AnswerID":"13"},{"QID":7,"AnswerID":"15"},{"QID":8,"AnswerID":18},{"QID":9,"AnswerID":26},{"QID":10,"AnswerID":29},{"QID":11,"AnswerID":31},{"QID":12,"AnswerID":35},{"QID":14,"AnswerID":48},{"QID":15,"AnswerID":52},{"QID":16,"AnswerID":55}];
    console.log(this.recordedAnswers);
    this.generateSolution();
  }

  generateSolution() {
    const matchedSolutions = this.questionService.getResultsBasedOnAnswers(this.recordedAnswers);
    console.log(matchedSolutions);
    //process recoreded answers
    //Pre-requisites - SolutionCategoryID = 1
    this.solutionPreReqs = matchedSolutions.filter(s => s.SolutionCategoryID == 1);
    console.log(this.solutionPreReqs);
    //Users
    this.solutionUsers = matchedSolutions.filter(s => s.SolutionCategoryID == 2);
    //Frontend
    this.solutionFrontend = matchedSolutions.filter(s => s.SolutionCategoryID == 3);
    //Middleware
    this.solutionMiddleware = matchedSolutions.filter(s => s.SolutionCategoryID == 4);
    //Backend
    this.solutionBackend = matchedSolutions.filter(s => s.SolutionCategoryID == 5);
    //Infrastructure
    this.solutionDeployment = matchedSolutions.filter(s => s.SolutionCategoryID == 6);
  }
}
