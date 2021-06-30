import { Component, OnInit, Input } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.scss']
})
export class Counter1Component implements OnInit {
  @Input('container-padding-bottom')
  ContainerPaddingBottom: number;

  counters: object[] = [
    { icon: 'box', value: 273, title: 'Components' },
    { icon: 'download-cloud', value: 654, title: 'Downloads' },
    { icon: 'anchor', value: 7941, title: 'Followers' },
    { icon: 'award', value: 654, title: 'New users' }
  ];

  constructor() {
    log.debug('Counter1Component - constructor');
  }

  ngOnInit() {
    log.debug('Counter1Component - init');
  }

  getPaddingBottom() {
    return this.ContainerPaddingBottom
      ? `pb-${this.ContainerPaddingBottom}`
      : '';
  }
}
