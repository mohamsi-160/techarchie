import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-home-latest-projects',
  templateUrl: './home-latest-projects.component.html',
  styleUrls: ['./home-latest-projects.component.scss']
})
export class HomeLatestProjectsComponent implements OnInit {
  images = [
    { url: 'assets/img/layers/frontend.png', name: 'Frontend', desc: 'Angular', class: ' rounded-top-left' },
    { url: 'assets/img/layers/middleware.png', name: 'Middleware', desc: 'MuleSoft' },
    { url: 'assets/img/layers/backend.png', name: 'Backend', desc: 'Snowflake', class: ' rounded-top-right' },
    { url: 'assets/img/layers/middleware.png', name: 'Middleware', desc: 'Apigee', class: ' rounded-bottom-left' },
    { url: 'assets/img/layers/backend.png', name: 'Backend', desc: 'AWS RDS' },
    { url: 'assets/img/layers/frontend.png', name: 'Frontend', desc: 'Ionic', class: ' rounded-bottom-right' }
  ];
  constructor() {
    log.debug('HomeLatestProjectsComponent - constructor');
  }

  ngOnInit() {
    log.debug('HomeLatestProjectsComponent - init');
  }
}
