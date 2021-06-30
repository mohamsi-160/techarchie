import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-home-heading',
  templateUrl: './home-heading.component.html',
  styleUrls: ['./home-heading.component.scss']
})
export class HomeHeadingComponent implements OnInit {
  constructor() {
    log.debug('HomeHeadingComponent - constructor');
  }

  ngOnInit() {
    log.debug('HomeHeadingComponent - init');
  }
}
