import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { QuestionService } from '../../../../services/question.service';
import { RecordAnswer } from '../models/RecordAnswer';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-results-prereq',
  templateUrl: './results-prereq.component.html',
  styleUrls: ['./results-prereq.component.scss']
})
export class ResultsPrereqComponent implements OnInit {
  @Input() solutionPreReqs:any[] = [];
  counters = [
    { icon: 'box', value: 'IDE', title: 'IDE' },
    { icon: 'download-cloud', value: 'Shell', title: 'Shell' },
    // { icon: 'sliders', value: 7941, title: 'Followers' },
    { icon: 'award', value: 'Source Control', title: 'Source Control' }
  ];
  plans = [
    {
      icon: 'box',
      plan: {
        name: 'Personal',
        price: 0.99,
        description:
          'Includes simple but powerful functionality for individuals and small teams. You can upgrade on the way'
      },
      features: [
        {
          name: 'Cras justo odio',
          class: 'strike-through'
        },
        {
          name: 'Dapibus ac facilisis in',
          class: 'strike-through'
        },
        {
          name: 'Morbi leo risus',
          class: 'strike-through'
        },
        {
          name: 'Porta ac consectetur ac'
        },
        {
          name: 'Vestibulum at eros'
        }
      ]
    },
    {
      icon: 'download-cloud',
      best: true,
      plan: {
        name: 'Business',
        price: 29.99,
        description:
          'For settle companies looking to stay competitive in the market and growing with the technology'
      },
      features: [
        {
          name: 'Cras justo odio',
          class: 'strike-through'
        },
        {
          name: 'Dapibus ac facilisis in',
          class: 'strike-through'
        },
        {
          name: 'Morbi leo risus'
        },
        {
          name: 'Porta ac consectetur ac'
        },
        {
          name: 'Vestibulum at eros'
        }
      ]
    },
    {
      icon: 'settings',
      plan: {
        name: 'Enterprise',
        price: 99.99,
        description:
          'Everything you can get from a professional solution to keep your business on its way to success'
      },
      features: [
        {
          name: 'Cras justo odio'
        },
        {
          name: 'Dapibus ac facilisis in'
        },
        {
          name: 'Morbi leo risus'
        },
        {
          name: 'Porta ac consectetur ac'
        },
        {
          name: 'Vestibulum at eros'
        }
      ]
    }
  ];
  public solutionPreReqs_IDE = [];
  public solutionPreReqs_IDE_Icon = "";
  public solutionPreReqs_Shell = [];
  public solutionPreReqs_Shell_Icon = "";
  public solutionPreReqs_SourceControl = [];
  public solutionPreReqs_SourceControl_Icon = "";

  constructor(public router: Router,
              public questionService: QuestionService) {
    log.debug('ResultsPrereqComponent - constructor');
  }

  ngOnInit() {
    log.debug('ResultsPrereqComponent - init');
    console.log(this.solutionPreReqs);
    this.generatePreReqs();
  }

  generatePreReqs(){
    this.solutionPreReqs_IDE = this.solutionPreReqs.filter(s => s.SolutionName == "IDE");
    this.solutionPreReqs_IDE_Icon = this.solutionPreReqs_IDE[0]["SolutionGroupIconUrl"];
    this.solutionPreReqs_Shell = this.solutionPreReqs.filter(s => s.SolutionName == "SHELL");
    this.solutionPreReqs_Shell_Icon = this.solutionPreReqs_Shell[0]["SolutionGroupIconUrl"];
    this.solutionPreReqs_SourceControl = this.solutionPreReqs.filter(s => s.SolutionName == "Source Control");
    this.solutionPreReqs_SourceControl_Icon = this.solutionPreReqs_SourceControl[0]["SolutionGroupIconUrl"];
  }
}
