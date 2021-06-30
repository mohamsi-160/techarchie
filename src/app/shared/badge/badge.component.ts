import { Component, OnInit, Input } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() bg: string;
  @Input() text: string = 'contrast';
  @Input() small: boolean = true;

  constructor() {
    log.debug('BadgeComponent - constructor');
  }

  ngOnInit() {
    log.debug('BadgeComponent - init');
  }
}
