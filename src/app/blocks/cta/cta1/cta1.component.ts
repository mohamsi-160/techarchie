import { Component, OnInit, Input } from '@angular/core';
import { Logger, I18nService, untilDestroyed } from '@app/core';
const log = new Logger('App');
@Component({
  selector: 'dc-cta1',
  templateUrl: './cta1.component.html',
  styleUrls: ['./cta1.component.scss']
})
export class Cta1Component implements OnInit {
  @Input()
  edge: string;

  @Input()
  background: string;

  constructor() {
    log.debug('Cta1Component - constructor');
  }

  ngOnInit() {
    log.debug('Cta1Component - init');
  }
}
