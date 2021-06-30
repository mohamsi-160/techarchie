import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { QuestionService } from '../../../../services/question.service';
import { RecordAnswer } from '../models/RecordAnswer';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-results-deploy',
  templateUrl: './results-deploy.component.html',
  styleUrls: ['./results-deploy.component.scss']
})
export class ResultsDeployComponent implements OnInit {
  @Input() solutionDeployment:any[] = [];
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


  constructor(public router: Router,
              public questionService: QuestionService) {
    log.debug('ResultsDeployComponent - constructor');
  }

  ngOnInit() {
    log.debug('ResultsDeployComponent - init');
    console.log(this.solutionDeployment);
  }
}
