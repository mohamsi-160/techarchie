import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-startup-why-dashcore',
  templateUrl: './startup-why-dashcore.component.html',
  styleUrls: ['./startup-why-dashcore.component.scss']
})
export class StartupWhyDashcoreComponent implements OnInit {
  constructor() {
    log.debug('StartupWhyDashcoreComponent - constructor');
  }

  ngOnInit() {
    log.debug('StartupWhyDashcoreComponent - init');
  }
}
