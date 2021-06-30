import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { QuestionService } from '../../../../services/question.service';
import { RecordAnswer } from '../models/RecordAnswer';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-results-tier',
  templateUrl: './results-tier.component.html',
  styleUrls: ['./results-tier.component.scss']
})
export class ResultsTierComponent implements OnInit {
  @Input() answers : [];
  plans = [
    {
      icon: 'box',
      best: 'users',
      plan: {
        name: 'Users',
        price: 0.99,
        description:
          'Types of Users',
        notes: 'End Users'
      },
      features: [
        {
          name: 'Staff',
          class: 'strike-through'
        },
        {
          name: 'Administrators',
          class: 'strike-through'
        }
      ]
    },
    {
      icon: 'download-cloud',
      best: 'frontend',
      plan: {
        name: 'Frontend',
        price: 29.99,
        description:
          'User Interface Layer',
        notes : 'Frameworks'
      },
      features: [
        {
          name: 'Ionic',
          class: 'strike-through'
        },
        {
          name: 'Ionic UI',
          class: 'strike-through'
        }
      ]
    },
    {
      icon: 'settings',
      best: 'middleware',
      plan: {
        name: 'Middleware',
        price: 99.99,
        description:
          'Business Logic Layer',
          notes : 'Authentication / API'
      },
      features: [
        {
          name: 'Google Login'
        },
        {
          name: 'Apigee'
        }
      ]
    },
    {
      icon: 'settings',
      best: 'backend',
      plan: {
        name: 'Backend',
        price: 99.99,
        description:
          'Backend Layer',
        notes: 'Databases & other sources'
      },
      features: [
        {
          name: 'Amazon Amplify'
        },
        {
          name: 'Amazon DynamoDB'
        }
      ]
    }
  ];

  constructor(public router: Router) {
    log.debug('ResultsTierComponent - constructor');
  }

  ngOnInit() {
    log.debug('ResultsTierComponent - init');
    console.log(this.answers);
  }
}
