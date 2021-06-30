import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component implements OnInit {
  constructor() {
    log.debug('Counter2Component - constructor');
  }

  ngOnInit() {
    log.debug('Counter2Component - init');
  }
}
