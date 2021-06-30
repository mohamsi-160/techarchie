import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {
  constructor() {
    log.debug('StartupComponent - constructor');
  }

  ngOnInit() {
    log.debug('StartupComponent - init');
  }
}
