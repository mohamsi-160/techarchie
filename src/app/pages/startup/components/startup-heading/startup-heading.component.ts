import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-startup-heading',
  templateUrl: './startup-heading.component.html',
  styleUrls: ['./startup-heading.component.scss']
})
export class StartupHeadingComponent implements OnInit {
  constructor() {
    log.debug('StartupHeadingComponent - constructor');
  }

  ngOnInit() {
    log.debug('StartupHeadingComponent - init');
  }
}
