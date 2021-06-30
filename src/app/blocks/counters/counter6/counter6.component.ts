import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-counter6',
  templateUrl: './counter6.component.html',
  styleUrls: ['./counter6.component.scss']
})
export class Counter6Component implements OnInit {
  counters = [
    { value: 273, title: 'Components' },
    { value: 654, title: 'Downloads' },
    { value: 7941, title: 'Followers' },
    { value: 654, title: 'New users' }
  ];

  constructor() {
    log.debug('Counter6Component - constructor');
  }

  ngOnInit() {
    log.debug('Counter6Component - init');
  }
}
