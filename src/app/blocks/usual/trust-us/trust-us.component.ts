import { Component, OnInit, Input } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-trust-us',
  templateUrl: './trust-us.component.html',
  styleUrls: ['./trust-us.component.scss']
})
export class TrustUsComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  containerClass: string;

  @Input()
  edge: string;

  @Input()
  background: string;

  constructor() {
    log.debug('TrustUsComponent - constructor');
  }

  ngOnInit() {
    log.debug('TrustUsComponent - init');
  }
}
