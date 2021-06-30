import { Component, OnInit } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-counter5',
  templateUrl: './counter5.component.html',
  styleUrls: ['./counter5.component.scss']
})
export class Counter5Component implements OnInit {
  counters = [
    { icon: 'box', value: 273, title: 'Components' },
    { icon: 'download-cloud', value: 654, title: 'Downloads' },
    { icon: 'sliders', value: 7941, title: 'Followers' },
    { icon: 'award', value: 654, title: 'New users' }
  ];
  constructor() {
    log.debug('Counter5Component - constructor');
  }

  ngOnInit() {
    log.debug('Counter5Component - init');
  }
}
