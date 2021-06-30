import { Injectable } from '@angular/core';
import { QuestionCategory } from './mockdata/QuestionCategory';
import { Question } from './mockdata/Question';
import {Answer} from './mockdata/Answer';
import {SolutionCategory} from './mockdata/SolutionCategory';
import {Solution} from './mockdata/Solution';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() {
   }

  getSolutionCategories(){
    return SolutionCategory;
  }

  getQuestionCategories(){
    return QuestionCategory;
  }

  getAllQuestionsWithAnswers(){
    //filter for questions
    const allQuestions = Question;
    // //now get answers for Questions
    // const questions = allQuestions.map((o) => {
    //   const t = o;
    //   const qID = t.ID;
    //   t['Answers'] = Answer.filter((e, i , a) => {
    //     return e.QuestionID == qID;
    //   });
    //   return t;
    // });
    return allQuestions;
  }

  getQuestionAnswers(qID : number){
    //filter for questions
    const filteredAnswers = Answer.filter((e) => {
      return e.QuestionID == qID;
    });

    return filteredAnswers;

    // const questions = allQuestions.map((o) => {
    //   const t = o;
    //   const qID = t.ID;
    //   t['Answers'] = Answer.filter((e, i , a) => {
    //     return e.QuestionID == qID;
    //   });
    //   return t;
    // });
  }

  // getNextSolutionCategoryID(cID: number){
  //   let nextID = -1;
  //   if(cID == -1){
  //     //return first item
  //     nextID = data.SolutionCategories[0].ID
  //   } else {
  //     let itemIndex = data.SolutionCategories.findIndex(e => e.ID == cID);
  //     if(itemIndex > -1 && itemIndex < data.SolutionCategories.length) {
  //       nextID = data.SolutionCategories[itemIndex].ID + 1;
  //     }
  //   }
  //   return nextID;
  // }

  getAllSolution(){
    const allSolutions = Solution;
    return allSolutions;
  }

  getResultsBasedOnAnswers(answers) {
    //get all solutions first
    const allSolutions = this.getAllSolution();
    //now filter solutions based on answers
    const matchedSolutions = allSolutions.filter((s) => {
      return answers.findIndex((a) => a["AnswerID"] == s["AnswerID"]) > -1
    });

    return matchedSolutions;
  }

}
