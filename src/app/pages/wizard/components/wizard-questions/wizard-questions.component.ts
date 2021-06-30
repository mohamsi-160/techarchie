import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { QuestionService } from '../../../../services/question.service';
import { RecordAnswer } from '../models/RecordAnswer';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');

@Component({
  selector: 'dc-wizard-questions',
  templateUrl: './wizard-questions.component.html',
  styleUrls: ['./wizard-questions.component.scss']
})
export class WizardQuestionsComponent implements OnInit {
  public allQuestions = [];
  public currentQuestion = {};
  // public currentQuestionCategoryID : number = -1;
  public nextQuestionID : string = "1";
  public currentQuestionAnswers = [];

  public recordedAnswers = [];
  public errorMessage : string = "";
  private nextQuestionMultiple = false;
  private nextQuestions = [];
  private nextQuestionIndex = -1;
  public nextButtonText = "Next";
  private showSolution = false;

  constructor(public router: Router,
              public questionService: QuestionService) {
    log.debug('WizardQuestionsComponent - constructor');
  }

  ngOnInit() {
    log.debug('WizardQuestionsComponent - init');
    this.allQuestions = this.questionService.getAllQuestionsWithAnswers();
    this.nextQuestionID = this.allQuestions[0].ID;
    this.goNext();
  }

  goNext(){
    log.debug('WizardQuestionsComponent - goNext');
    if(!this.showSolution) {
      if(!this.nextQuestionMultiple) {
        var nextQuestionIDs = String(this.nextQuestionID).split(',');
        //filter for questions
        const filteredQuestions = this.allQuestions.filter((e) => {
          return nextQuestionIDs.indexOf(String(e.ID)) > -1;
          // return e.ID == this.nextQuestionID;
        });

        if(filteredQuestions.length > 1){
          //multiple questions available as next question
          this.nextQuestionMultiple = true;
          this.nextQuestions = filteredQuestions;
          this.nextQuestionIndex = 0;
          this.currentQuestion = this.nextQuestions[this.nextQuestionIndex];
        } else {
          //only single question so get the first one
          this.currentQuestion = filteredQuestions[0];
        }

      } else{
        ++this.nextQuestionIndex;
        this.currentQuestion = this.nextQuestions[this.nextQuestionIndex];

        //Already on the last question of multiple questions reset multi question
        if(this.nextQuestionIndex == this.nextQuestions.length - 1) {
          //last next question id so reset
          this.nextQuestionMultiple = false;
          this.nextQuestions = [];
          this.nextQuestionIndex = 0;
        }
      }

      //get answers
      const questionAnswers = this.questionService.getQuestionAnswers(this.currentQuestion["ID"]);

      //verify DepQuestionID
      const filteredAnswers = questionAnswers.filter((e) => {
        var matchFound = true;
        if(e.DepQuestionID){
            //check recorded answers DepQuestionID & DepAnswerID
            var foundAnswer = this.recordedAnswers.find((r) => {
              return r.QID == e.DepQuestionID && r.AnswerID == e.DepAnswerID;
            });
            if(!foundAnswer) {
              matchFound = false;
            }
        }
        return matchFound;
      });

      this.currentQuestionAnswers = filteredAnswers;
    } else {
      //show solution
      this.goSolution();
    }
    log.debug('QuestionType : ' + this.currentQuestion['QuestionType']);
  }


  recordAnswer(qID, event, isCheckbox, allowedAnswersCount){
    log.debug("qID" + qID);
    log.debug("event" + event.target.value);
    const answerID = parseInt(event.target.value);
    this.updateRecordedAnswers(qID, answerID, event.target.checked, isCheckbox, allowedAnswersCount);
    //filter for questions
    const filteredAnswer = this.currentQuestionAnswers.find((e) => {
      return e.ID == answerID;
    });
    this.nextQuestionID = filteredAnswer.NextQuestionID;

    if(this.nextQuestionID == "") {
      this.nextButtonText = "Finish";
      this.showSolution = true;
    }
    else {
      this.nextButtonText = "Next";
      this.showSolution = false;
    }
  }

  goPrevious(){

  }

  goSolution() {
    let navigationExtras: NavigationExtras = {
      state: {
        recordedAnswers: this.recordedAnswers
      }
    };
    log.debug('{ "recordedAnswers": JSON.stringify(this.recordedAnswers) }' + JSON.stringify(this.recordedAnswers));
    // this.router.navigate(['solution'], navigationExtras);
    this.router.navigate(['/results', { "recordedAnswers": JSON.stringify(this.recordedAnswers) }]);
  }

  updateRecordedAnswers(qID, answerID, isChecked, isCheckbox, allowedAnswersCount){
    let addNew = false;
    if(this.recordedAnswers.length == 0){
      addNew = true;
    }
    else {
      //if muliple answers are allowed
      if(allowedAnswersCount > 0) {
        //if answer is unchecked then remove it
        if(isChecked) {
          //check if an answer is already recorded for the question
          let itemIndex = this.recordedAnswers.findIndex(e => e.QID == qID && e.AnswerID == answerID);
          if(itemIndex > -1) {
            this.recordedAnswers[itemIndex].AnswerID = answerID;
          } else {
            addNew = true;
          }
        } else {
          //if answer is already recorded then remove it
          let itemIndex = this.recordedAnswers.findIndex(e => e.QID == qID && e.AnswerID == answerID);
          if(itemIndex > -1) {
            //remove the item
            let updatedAnswers = this.recordedAnswers.filter(e => !(e.QID == qID && e.AnswerID == answerID));
            this.recordedAnswers = updatedAnswers;
          }
        }
      } else {
         //check if an answer is already recorded for the question
         let itemIndex = this.recordedAnswers.findIndex(e => e.QID == qID);
         //update item if found
         if(itemIndex > -1) {
           this.recordedAnswers[itemIndex].AnswerID = answerID;
         } else {
           addNew = true;
         }
      }
    }
    if(addNew){
      let ra = new RecordAnswer(qID, answerID);
      this.recordedAnswers.push(ra);
    }
    console.log(this.recordedAnswers);
  }
}
